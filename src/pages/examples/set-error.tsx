import React, { memo } from 'react';
import JsonExample from '@components/json-example';
import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import SetError, { form, examplesMap } from '@examples/set-error';

type Props = {};

const Page: React.FC<Props> = ({}) => {
  return (
    <>
      <h1>
        <FormattedMessage id="examples.setError.title" />
      </h1>
      <p>
        <FormattedMessage id="examples.setError.description" values={{ br: <br /> }} />
      </p>
      <SetError />
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
