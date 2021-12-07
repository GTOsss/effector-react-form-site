import React, { memo } from 'react';
import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import FieldLevelValidation, { form, examplesMap } from '@examples/field-level-validation';
import StoresContainer from '@components/stores-container';

type Props = {};

const Page: React.FC<Props> = ({}) => {
  return (
    <>
      <h1>
        <FormattedMessage id="examples.simpleForm.title" />
      </h1>
      <FieldLevelValidation />
      <StoresContainer form={form} />
      <CodeHighlighter code={examplesMap} />
    </>
  );
};

export default memo(Page);
