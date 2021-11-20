import React, { memo } from 'react';
import JsonExample from '@components/json-example';
import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import FieldLevelValidation, { form, examplesMap } from '@examples/form-level-validation';

type Props = {};

const Page: React.FC<Props> = ({}) => {
  return (
    <>
      <h1>
        <FormattedMessage id="examples.simpleForm.title" />
      </h1>
      <FieldLevelValidation />
      <div className="row">
        <JsonExample source={form.$values} title="$values" />
        <JsonExample source={form.$fieldsInline} title="$fieldsInline" />
        <JsonExample source={form.$form} title="$form" />
      </div>
      <CodeHighlighter code={examplesMap} />
    </>
  );
};

export default memo(Page);
