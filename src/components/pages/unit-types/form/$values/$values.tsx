import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { fromUnits, withSample, withUseStore, withWatch } from './code-examples';

interface IProps {}

const path = 'components.pages.$values.';

const Values = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>$values</h1>
      <div>
        <FormattedMessage id={`${path}storeWith`} />{' '}
        <Link to="/api/unit-types/form/" className="Link">
          <FormattedMessage id="components.all.ofForm" />
        </Link>
        .
      </div>
      <h2>
        <FormattedMessage id="components.all.usageExamples" />
      </h2>
      <ol className="List">
        <li>
          <div>
            <FormattedMessage id={`${path}Using`} /> useStore
            <CodeHighlighter code={withUseStore} className="CodeHighlighter" />
          </div>
        </li>
        <li>
          <div>
            <FormattedMessage id={`${path}Using`} /> sample
            <CodeHighlighter code={withSample} className="CodeHighlighter" />
          </div>
        </li>
        <li>
          <div>
            <FormattedMessage id={`${path}Using`} /> watch
            <CodeHighlighter code={withWatch} className="CodeHighlighter" />
          </div>
        </li>
        <li>
          <div>
            <FormattedMessage id={`${path}recordingFromOther`} />
            <CodeHighlighter code={fromUnits} className="CodeHighlighter" />
          </div>
        </li>
      </ol>
    </div>
  );
};

export default memo(Values);
