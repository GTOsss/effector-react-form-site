import React, { memo } from 'react';
import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import SimpleForm, { form, examplesMap } from '@examples/map-submit';
import StoresContainer from '@components/stores-container';

type Props = {};

const Page: React.FC<Props> = ({}) => {
  return (
    <>
      <h1>
        <FormattedMessage id="examples.mapSubmit.title" />
      </h1>
      <p>
        <FormattedMessage id="examples.mapSubmit.description" values={{ br: <br /> }} />
      </p>
      <SimpleForm />
      <StoresContainer form={form} />
      <CodeHighlighter code={examplesMap} />
    </>
  );
};

export default memo(Page);
