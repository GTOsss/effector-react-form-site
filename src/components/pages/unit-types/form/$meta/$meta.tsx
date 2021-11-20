import CodeHighlighter from '@components/code-highlighter';
import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { hookMeta, initMeta } from './code-examples';
import styles from './styles.module.scss';

interface IProps {}

const Meta = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>$meta</h1>
      <div>
        Стор с метаданными формы. Их можно передать как при{' '}
        <Link to="/api/unit-creators/create-form" className={styles.Link}>
          инициализации формы:
        </Link>
      </div>
      <CodeHighlighter code={initMeta} className={styles.codeHighlighter} />
      <div>
        Так и через hook{' '}
        <Link to="/api/hooks/use-form" className={styles.Link}>
          useForm
        </Link>
        :
      </div>
      <CodeHighlighter code={hookMeta} className={styles.codeHighlighter} />
    </div>
  );
};

export default memo(Meta);
