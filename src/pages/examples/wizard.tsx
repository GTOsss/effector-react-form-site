import React, { memo } from 'react';
import MainLayout from '@components/main-layout';
import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import Wizard, { examplesMap, $allFormValues } from '@examples/wizard';
import JsonExample from '@components/json-example';

type Props = {};

const Page: React.FC<Props> = ({}) => {
  return (
    <MainLayout menuKey="Examples">
      <h1>
        <FormattedMessage id="examples.wizard.title" />
      </h1>
      <p>
        <FormattedMessage id="examples.wizard.description" values={{ br: <br /> }} />
      </p>
      <Wizard />
      <div className="row code-center">
        <JsonExample source={$allFormValues} title="$allFormValues" />
      </div>
      <CodeHighlighter examplesMap={examplesMap} />
    </MainLayout>
  );
};

export default memo(Page);
