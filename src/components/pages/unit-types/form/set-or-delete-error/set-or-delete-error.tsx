import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { setOrDeleteError, setOrDeleteErrorType } from './code-examples';
import styles from './styles.module.scss';

interface IProps {}

const path = 'components.pages.setOrDeleteError';

const SetOrDeleteError = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>setOrDeleteError</h1>
      <div>
        <FormattedMessage id={`${path}description`} />
      </div>
      <CodeHighlighter code={setOrDeleteErrorType} className="CodeHighlighter" />
      <h2>
        <FormattedMessage id="components.all.usageExample" />
      </h2>
      <CodeHighlighter code={setOrDeleteError} className="CodeHighlighter" />
    </div>
  );
};

export default memo(SetOrDeleteError);
