import React, { memo } from 'react';
import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import SetError, { form, examplesMap } from '@examples/set-error';
import StoresContainer from '@components/stores-container';

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
      <StoresContainer form={form} />
      <CodeHighlighter code={examplesMap} />
    </>
  );
};

export default memo(Page);
