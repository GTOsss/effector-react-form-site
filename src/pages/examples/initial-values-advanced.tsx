import React, { memo } from 'react';
import JsonExample from '@components/json-example';
import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import InitialValues, { form, examplesMap } from '@examples/initial-values-advanced';

type Props = {};

const Page: React.FC<Props> = ({}) => {
  return (
    <>
      <h1>
        <FormattedMessage id="examples.initialValuesAdvanced.title" />
      </h1>
      <p>
        <FormattedMessage id="examples.initialValuesAdvanced.description" values={{ br: <br /> }} />
      </p>
      <InitialValues />
      <div className="row">
        <JsonExample source={form.$values} title="$values" />
        <JsonExample source={form.$fieldsInline} title="$fieldsInline" />
        <JsonExample source={form.$form} title="$form" />
      </div>
      <CodeHighlighter examplesMap={examplesMap} />
    </>
  );
};

export default memo(Page);
