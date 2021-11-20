import CodeHighlighter from '@components/code-highlighter';
import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { fromUnits, withSample, withUseStore, withWatch } from './code-examples';
import styles from './styles.module.scss';

interface IProps {}

const Values = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>$values</h1>
      <div>
        Стор со значениями{' '}
        <Link to="/api/unit-types/form/" className={styles.Link}>
          формы
        </Link>
        .
      </div>
      <h2>Примеры использования:</h2>
      <ol className={styles.examplesList}>
        <li>
          <div>
            <span className={styles.exampleName}>С использованием useStore</span>
            <CodeHighlighter code={withUseStore} />
          </div>
        </li>
        <li>
          <div>
            <span className={styles.exampleName}>С использованием sample</span>
            <CodeHighlighter code={withSample} />
            <span className={styles.exampleName}>
              Как и все юниты API effector, может использоваться как в clock, так и в source.
            </span>
          </div>
        </li>
        <li>
          <div>
            <span className={styles.exampleName}>С использованием подписки watch</span>
            <CodeHighlighter code={withWatch} />
          </div>
        </li>
        <li>
          <div>
            <span className={styles.exampleName}>Запись значений из других юнитов</span>
            <CodeHighlighter code={fromUnits} />
          </div>
        </li>
      </ol>
    </div>
  );
};

export default memo(Values);
