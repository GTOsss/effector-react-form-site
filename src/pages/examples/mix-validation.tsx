import React, { memo } from 'react';
import JsonExample from '@components/json-example';
import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import MixValidation, { form, examplesMap } from '@examples/mix-validation';

type Props = {};

const Page: React.FC<Props> = ({}) => {
  return (
    <>
      <h1>
        <FormattedMessage id="examples.mixValidation.title" />
      </h1>
      <p>
        <FormattedMessage id="examples.mixValidation.description" />
      </p>
      <MixValidation />
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
