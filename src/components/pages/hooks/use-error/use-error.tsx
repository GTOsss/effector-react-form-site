import CodeHighlighter from '@components/code-highlighter';
import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { useErrorExample } from './code-examples';

interface IProps {}

const UseError = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>useError</h1>
      <div>
        Хук, для доступа к полям ошибки из родительского элемента. До этого мы получали ошибки внутри компонента Input,
        после вызова контроллера. Но что, если нам нужно получать ошибки в родительскомм компоненте? Для это существует
        useError. Хук useError принимает два аргумента: имя поля и форму, поля которой нас интересуют.
      </div>
      <CodeHighlighter code={useErrorExample} className="CodeHighlighter" />
      <ol className="List">
        <li>
          <span className="ListItemName">inputValue</span>: содержит значение, записанное в инпуте.
        </li>
        <li>
          <span className="ListItemName">form</span>: содержит данные из{' '}
          <Link to="/api/unit-types/form/$form" className="Link">
            $form
          </Link>{' '}
          переданной формы.
        </li>
        <li>
          <span className="ListItemName">meta</span>: содержит данные из{' '}
          <Link to="/api/unit-types/form/$meta" className="Link">
            $meta
          </Link>{' '}
          переданной формы.
        </li>
        <li>
          <span className="ListItemName">fieldState</span>: содержит данные из{' '}
          <Link to="/api/unit-types/form/$fields-inline" className="Link">
            $fieldsInline
          </Link>{' '}
          указанного поля формы.
        </li>
        <li>
          <span className="ListItemName">error</span>: содержит ошибку поля из{' '}
          <Link to="/api/unit-types/form/$meta" className="Link">
            $outerErrorsInline
          </Link>{' '}
          или{' '}
          <Link to="/api/unit-types/form/$errros-inline" className="Link">
            $errorsInline
          </Link>
          . Внешние ошибки из $outerErrorsInline имеют приоритет.
        </li>
        <li>
          <span className="ListItemName">innerError</span>: содержит ошибку поля из{' '}
          <Link to="/api/unit-types/form/$errros-inline" className="Link">
            $errorsInline
          </Link>
          .
        </li>
        <li>
          <span className="ListItemName">outerError</span>: содержит ошибку поля из{' '}
          <Link to="/api/unit-types/form/$meta" className="Link">
            $outerErrorsInline
          </Link>
          .
        </li>
        <li>
          <span className="ListItemName">isShowError</span>: булевое значение для условного рендеринга текста с ошибкой.
          Имеет значение true, если в isShowOuterError или isShowInnerError записано true.
        </li>
        <li>
          <span className="ListItemName">isShowOuterError</span>: булевое значение для условного рендеринга текста с
          внешней ошибкой.
        </li>
        <li>
          <span className="ListItemName">isShowInnerError</span>: булевое значение для условного рендеринга текста с
          ошибкой.
        </li>
      </ol>
    </div>
  );
};

export default memo(UseError);
