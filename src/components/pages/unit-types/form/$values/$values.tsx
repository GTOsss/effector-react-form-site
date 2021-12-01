import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { fromUnits, withSample, withUseStore, withWatch } from './code-examples';
import styles from './styles.module.scss';

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
            <span className={styles.exampleName}>
              <FormattedMessage id={`${path}Using`} /> useStore
            </span>
            <CodeHighlighter code={withUseStore} className="CodeHighlighter" />
          </div>
        </li>
        <li>
          <div>
            <span className={styles.exampleName}>
              <FormattedMessage id={`${path}Using`} /> sample
            </span>
            <CodeHighlighter code={withSample} className="CodeHighlighter" />
            <span className={styles.exampleName}>
              Как и все юниты API effector, может использоваться как в clock, так и в source.
            </span>
          </div>
        </li>
        <li>
          <div>
            <span className={styles.exampleName}>
              <FormattedMessage id={`${path}Using`} /> watch
            </span>
            <CodeHighlighter code={withWatch} className="CodeHighlighter" />
          </div>
        </li>
        <li>
          <div>
            <span className={styles.exampleName}>
              <FormattedMessage id={`${path}recordingFromOther`} />
            </span>
            <CodeHighlighter code={fromUnits} className="CodeHighlighter" />
          </div>
        </li>
      </ol>
    </div>
  );
};

export default memo(Values);
