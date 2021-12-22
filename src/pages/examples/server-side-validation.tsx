import React, { memo } from 'react';
import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import ServerSideValidation, { form, examplesMap } from '@examples/server-side-validation';
import StoresContainer from '@components/stores-container';

type Props = {};

const Page: React.FC<Props> = ({}) => {
  return (
    <>
      <h1>
        <FormattedMessage id="examples.serverSideValidation.title" />
      </h1>
      <p>
        <FormattedMessage id="examples.serverSideValidation.description" values={{ br: <br /> }} />
      </p>
      <ServerSideValidation />
      <StoresContainer form={form} />
      <CodeHighlighter code={examplesMap} />
    </>
  );
};

export default memo(Page);
