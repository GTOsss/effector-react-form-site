import React, { memo } from 'react';
import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import InitialValues, { form, examplesMap } from '@examples/initial-values-advanced';
import StoresContainer from '@components/stores-container';

type Props = {};

const Page: React.FC<Props> = ({}) => {
  return (
    <>
      <h1>
        <FormattedMessage id="examples.initialValuesAdvanced.title" />
      </h1>
      <p>
        <FormattedMessage id="examples.initialValuesAdvanced.description" values={{ br: <br /> }} />
      </p>
      <InitialValues />
      <StoresContainer form={form} />
      <CodeHighlighter code={examplesMap} />
    </>
  );
};

export default memo(Page);
