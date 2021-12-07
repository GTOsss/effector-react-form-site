import React, { memo } from 'react';
import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import MixValidation, { form, examplesMap } from '@examples/mix-validation';
import StoresContainer from '@components/stores-container';

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
      <StoresContainer form={form} />
      <CodeHighlighter code={examplesMap} />
    </>
  );
};

export default memo(Page);
