import React, { memo } from 'react';
import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import Virtualized, { examplesMap } from '@examples/virualized';

type Props = {};

const Page: React.FC<Props> = ({}) => {
  return (
    <>
      <h1>
        <FormattedMessage id="examples.virtualized.title" />
      </h1>
      <p>
        <FormattedMessage id="examples.virtualized.description" values={{ br: <br /> }} />
      </p>
      <Virtualized />
      <CodeHighlighter code={examplesMap} />
    </>
  );
};

export default memo(Page);
