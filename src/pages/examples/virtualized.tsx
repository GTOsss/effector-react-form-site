import React, { memo } from 'react';
import MainLayout from '@components/main-layout';
import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import Virtualized, { examplesMap } from '@examples/virualized';

type Props = {};

const Page: React.FC<Props> = ({}) => {
  return (
    <MainLayout menuKey="Examples">
      <h1>
        <FormattedMessage id="examples.virtualized.title" />
      </h1>
      <p>
        <FormattedMessage id="examples.virtualized.description" values={{ br: <br /> }} />
      </p>
      <Virtualized />
      <CodeHighlighter examplesMap={examplesMap} />
    </MainLayout>
  );
};

export default memo(Page);
