const fs = require('fs');
const { resolve } = require('path');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const _ = require('lodash');

let eslintConfig = require('../../.eslintrc.js');

// take example.tsx from src/examples/[example-name]/example.ts
// create src/examples/[example-name]/source/[example-name].tsx; for eslint
// create src/examples/[example-name]/source/[example-name].jsx; for eslint
// use created file for fix eslint and create string file

const ESLint = require('eslint').ESLint;

const babel = require('@babel/core');
const babelConfig = {
  plugins: [['@babel/plugin-transform-typescript', { isTSX: true }]],
};

const pathToExamples = resolve(__dirname, '../../src/examples');

const createFileWithContent = ({ path, file, content }) => {
  mkdirp.sync(resolve(path));
  fs.writeFileSync(resolve(path, file), content);
};

const createFileWithStringExample = ({
  exampleName,
  content,
  type, // ts or js for code highlight
}) => {
  mkdirp.sync(resolve(pathToExamples, exampleName, 'generate-results'));
  const currentContent = content.replace(/^export .+\n/gm, '');
  const resultContent = `export default ${'`'}${currentContent}${'`'};\n`;
  const pathForWrite = resolve(pathToExamples, exampleName, 'generate-results', `${exampleName}-${type}.ts`);
  fs.writeFileSync(pathForWrite, resultContent);
};

const startESLint = async (file) => {
  const eslint = new ESLint({ fix: true, baseConfig: eslintConfig });
  const results = await eslint.lintFiles([file]);
  await ESLint.outputFixes(results);
  const formatter = await eslint.loadFormatter('stylish');
  const resultText = formatter.format(results);
  console.log(resultText);
  return fs.readFileSync(file).toString();
};

const getPathToSource = ({ dirExample, fileName, fileExt, suffix }) => {
  const path = resolve(pathToExamples, dirExample, 'source');
  const file = `${fileName}${suffix ? '-' + suffix : ''}.${fileExt}`;
  return { path, file };
};

const handleCode = async ({ content, dirExample }) => {
  const pathToSourceTsx = getPathToSource({ dirExample, fileName: dirExample, fileExt: 'tsx' });
  let tsxContent = content;
  createFileWithContent({ ...pathToSourceTsx, content: tsxContent });
  let formattedCodeTsx = await startESLint(resolve(pathToSourceTsx.path, pathToSourceTsx.file));
  formattedCodeTsx = formattedCodeTsx.replace(/[`]/gm, '\\`');
  formattedCodeTsx = formattedCodeTsx.replace(/[$]/gm, '\\$');
  createFileWithStringExample({ exampleName: dirExample, type: 'tsx', content: formattedCodeTsx });

  const pathToSourceJsx = getPathToSource({ dirExample, fileName: `${dirExample}`, fileExt: 'tsx', suffix: 'jsx' });
  let jsxContent = babel.transform(content, babelConfig).code;
  jsxContent = jsxContent.replace(/(?<=controller\({)\n/gm, '');
  jsxContent = jsxContent.replace(/(?=const form)/, '\n');
  createFileWithContent({ ...pathToSourceJsx, content: jsxContent });
  let formattedCodeJsx = await startESLint(resolve(pathToSourceJsx.path, pathToSourceJsx.file));
  formattedCodeJsx = formattedCodeJsx.replace(/[`]/gm, '\\`');
  formattedCodeJsx = formattedCodeJsx.replace(/[$]/gm, '\\$');
  createFileWithStringExample({ exampleName: dirExample, type: 'jsx', content: formattedCodeJsx });

  rimraf(resolve(pathToExamples, dirExample, 'source'), () => {});
};

const createIndexFile = ({ dirExample }) => {
  const exampleComponentName = _.upperFirst(_.camelCase(dirExample));
  const path = resolve(pathToExamples, dirExample);
  const fileContent = `import ${exampleComponentName}, { form } from './example';
import jsx from './generate-results/${dirExample}-jsx';
import tsx from './generate-results/${dirExample}-tsx';

const examplesMap = { jsx, tsx };

export default ${exampleComponentName};
export { form, examplesMap };
`;
  createFileWithContent({ path, file: 'index.ts', content: fileContent });
};

const start = () => {
  const examplesDir = fs.readdirSync(pathToExamples);
  examplesDir.forEach((dirExample) => {
    const pathForRead = resolve(pathToExamples, dirExample, 'example.tsx');
    let content = fs.readFileSync(pathForRead).toString();
    const ignore = fs.existsSync(resolve(pathToExamples, dirExample, 'generate-results'));
    const ignoreIndex = fs.existsSync(resolve(pathToExamples, dirExample, 'index.ts'));
    // const ignore = false;

    if (!ignore) {
      handleCode({ content, dirExample });
    }

    if (!ignoreIndex) {
      createIndexFile({ dirExample });
    }
  });
};

start();
