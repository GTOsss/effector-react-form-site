import React, { memo } from 'react';
import Prism from 'prismjs';
import cx from 'classnames';
import { useStore } from 'effector-react';
import { setValue, langValue } from './store';
import styles from './styles.module.scss';
import './darcula.css';

interface Props {
  code: Record<'jsx' | 'tsx', string> | string;
  className?: string;
}

const CodeHighlighter: React.FC<Props> = ({ code, className }) => {
  const activeLang = useStore(langValue);

  return (
    <div className={cx(className, styles.root)}>
      {typeof code !== 'string' && (
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
      )}
      {typeof code !== 'string' && (
        <div className={styles.wrapCode}>
          <pre
            dangerouslySetInnerHTML={{
              __html: Prism.highlight(code[activeLang], Prism.languages.tsx, 'tsx'),
            }}
          />
        </div>
      )}
      {typeof code === 'string' && (
        <div className={styles.wrapCode}>
          <pre
            dangerouslySetInnerHTML={{
              __html: Prism.highlight(code, Prism.languages.tsx, 'tsx'),
            }}
          />
        </div>
      )}
    </div>
  );
};

export default memo(CodeHighlighter);
