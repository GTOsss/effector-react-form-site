import CodeHighlighter from '@components/code-highlighter';
import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { formula } from './code-examples';
import styles from './styles.module.scss';

interface IProps {}

const FieldsInline = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>$fieldsInline</h1>
      <div>Стор, содержащий объект с метаданными о полях формы.</div>
      <CodeHighlighter formula={formula} />
      <h2>Свойства</h2>
      <ol className={styles.propertyList}>
        <li>
          <span className={styles.propertyName}>active</span>: говорит является ли поле активным в данный момент. По
          умолчанию false.
        </li>
        <li>
          <span className={styles.propertyName}>touched</span>: говорит, был ли клик по полю после рендера. По
          умолочанию false.
        </li>
        <li>
          <span className={styles.propertyName}>changed</span>: говорит, изменялись ли данные поля после инициализации.
        </li>
        <li>
          <span className={styles.propertyName}>blured</span>: меняет значение на true при потере фокуса на элементе.
          Остаётся в этом состоянии до следующей реинициализации формы.
        </li>
        <li>
          <span className={styles.propertyName}>touchedAfterOuterError</span>: меняет значение на true при клике на
          элемент формы, если в <Link to="/api/unit-types/form/$outer-errors-inline">$outerErrorsInline</Link> есть поле
          с ошибкой этого элемента. Повторная отправка формы сбрасывает значение на false.
        </li>
        <li>
          <span className={styles.propertyName}>changedAfterOuterError</span>: меняет значение на true при изменении
          значений элемента формы, если в <Link to="/api/unit-types/form/$outer-errors-inline">$outerErrorsInline</Link>{' '}
          есть поле с ошибкой этого элемента. Повторная отправка формы сбрасывает значение на false.
        </li>
        <li>
          <span className={styles.propertyName}>blurredAfterOuterError</span>: меняет значение на true при потере фокуса
          на элементе формы, если в <Link to="/api/unit-types/form/$outer-errors-inline">$outerErrorsInline</Link> есть
          поле с ошибкой этого элемента. Повторная отправка формы или изменение значений элемента формы сбрасывает
          значение на false.
        </li>
        <li>
          <span className={styles.propertyName}>validate</span>: содержит функцию валидации элемента формы.
        </li>
      </ol>
    </div>
  );
};

export default memo(FieldsInline);
