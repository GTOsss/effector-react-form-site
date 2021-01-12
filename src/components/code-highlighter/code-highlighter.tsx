import React, { memo } from 'react';
import Prism from 'prismjs';
import cx from 'classnames';
import { useStore } from 'effector-react';
import { setValue, langValue } from './store';
import styles from './styles.module.scss';
import './darcula.css';

interface Props {
  examplesMap: Record<'jsx' | 'tsx', string>;
}

const CodeHighlighter: React.FC<Props> = ({ examplesMap }) => {
  const activeLang = useStore(langValue);

  return (
    <div>
      <div className={styles.switcher}>
        <button
          onClick={() => setValue('jsx')}
          className={cx(styles.switchButton, {
            [styles.switchButton_active]: activeLang === 'jsx',
          })}
        >
          jsx
        </button>
        <button
          onClick={() => setValue('tsx')}
          className={cx(styles.switchButton, {
            [styles.switchButton_active]: activeLang === 'tsx',
          })}
        >
          tsx
        </button>
      </div>
      <div className={styles.wrapCode}>
        <pre
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(examplesMap[activeLang], Prism.languages.tsx, 'tsx'),
          }}
        />
      </div>
    </div>
  );
};

export default memo(CodeHighlighter);
