import React, { memo } from 'react';
import JsonExample from '@components/json-example';
import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import InitialValues, { form, examplesMap } from '@examples/initial-values';

type Props = {};

const Page: React.FC<Props> = ({}) => {
  return (
    <>
      <h1>
        <FormattedMessage id="examples.initialValues.title" />
      </h1>
      <InitialValues />
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
