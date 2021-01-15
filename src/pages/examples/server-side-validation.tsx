import React, { memo } from 'react';
import MainLayout from '@components/main-layout';
import JsonExample from '@components/json-example';
import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import ServerSideValidation, { form, examplesMap } from '@examples/server-side-validation';

type Props = {};

const Page: React.FC<Props> = ({}) => {
  return (
    <MainLayout menuKey="Examples">
      <h1>
        <FormattedMessage id="examples.serverSideValidation.title" />
      </h1>
      <p>
        <FormattedMessage id="examples.serverSideValidation.description" values={{ br: <br /> }} />
      </p>
      <ServerSideValidation />
      <div className="row">
        <JsonExample source={form.$values} title="$values" />
        <JsonExample source={form.$fieldsInline} title="$fieldsInline" />
        <JsonExample source={form.$form} title="$form" />
      </div>
      <CodeHighlighter examplesMap={examplesMap} />
    </MainLayout>
  );
};

export default memo(Page);
