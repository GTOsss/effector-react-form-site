import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { flatObject, nestedObject } from './code-examples';

interface IProps {}

const path = 'components.pages.makeNested.';

const MakeNested = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>makeNested</h1>
      <div>
        <FormattedMessage id={`${path}description1st`} />
      </div>
      <CodeHighlighter code={flatObject} className="CodeHighlighter" />
      <div>
        <FormattedMessage id={`${path}description2nd`} />
      </div>
      <CodeHighlighter code={nestedObject} className="CodeHighlighter" />
      <FormattedMessage id={`${path}description3rd`} />
    </div>
  );
};

export default memo(MakeNested);
