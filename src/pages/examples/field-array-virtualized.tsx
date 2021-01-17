import React, { memo } from 'react';
import MainLayout from '@components/main-layout';
import JsonExample from '@components/json-example';
import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import SimpleForm, { form, examplesMap } from '@examples/field-array-virtualized';

type Props = {};

const Page: React.FC<Props> = ({}) => {
  return (
    <MainLayout menuKey="Examples">
      <h1>
        <FormattedMessage id="examples.fieldArrayVirtualized.title" />
      </h1>
      <SimpleForm />
      <CodeHighlighter examplesMap={examplesMap} />
    </MainLayout>
  );
};

export default memo(Page);
