import React, { memo } from 'react';
import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import InitialValues, { form, examplesMap } from '@examples/initial-values';
import StoresContainer from '@components/stores-container';

type Props = {};

const Page: React.FC<Props> = ({}) => {
  return (
    <>
      <h1>
        <FormattedMessage id="examples.initialValues.title" />
      </h1>
      <InitialValues />
      <StoresContainer form={form} />
      <CodeHighlighter code={examplesMap} />
    </>
  );
};

export default memo(Page);
