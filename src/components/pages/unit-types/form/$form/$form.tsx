import CodeHighlighter from '@components/code-highlighter';
import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { type } from './code-examples';
import styles from './styles.module.scss';

interface IProps {}

const Form = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>$form</h1>
      <div>
        Стор, хранящий основное состояние{' '}
        <Link to="/api/unit-types/form/" className={styles.Link}>
          формы
        </Link>
        .
      </div>
      <CodeHighlighter code={type} className={styles.codeHighlighter} />
      <h2>Свойства</h2>
      <ol>
        <li className={styles.listItem}>
          <span className={styles.propertyName}>submitted</span>: сообщает о том, была ли форма отправлена.
        </li>
        <li className={styles.listItem}>
          <span className={styles.propertyName}>hasError</span>: сообщает о том, есть ли в форме ошибки, созданые
          функцией валидации.
        </li>
        <li className={styles.listItem}>
          <span className={styles.propertyName}>hasOuterError</span>: сообщает о том, есть ли в форме ошибки,
          добавленные внешними функциями в{' '}
          <Link to="/api/unit-types/form/$outer-errors-inline" className={styles.Link}>
            $outerErrorsInline
          </Link>
          .
        </li>
      </ol>
      <ol></ol>
    </div>
  );
};

export default memo(Form);
