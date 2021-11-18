import CodeHighlighter from '@components/code-highlighter';
import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import createFormCode from './create-form-code';
import styles from './styles.module.scss';

interface IProps {}

const CreateForm = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>CreateForm</h1>
      <div>
        Метод для создания <Link to="/api/unit-types/form/">формы</Link>
      </div>
      <h2>Формула</h2>
      <CodeHighlighter formula={createFormCode} />
      <h2>Аргументы</h2>
      <ol className={styles.argumentList}>
        <li>
          <span className={styles.argumentName}>name</span>: название формы
        </li>
        <li>
          <span className={styles.argumentName}>validate</span>: функция для валидации полей формы. Принимает значения
          полей формы Values и объект с дополнительными параметрами <Link to="/api/unit-types/form/$meta">meta</Link>.
          Возвращает объект с ошибками невалидных полей формы.
        </li>
        <li>
          <span className={styles.argumentName}>mapSubmit</span>: функция, преобразующая данные, полученные из полей
          формы, перед передачей их в функцию onSubmit.
        </li>
        <li>
          <span className={styles.argumentName}>onSubmit</span>: функция, которая срабатывает на событии{' '}
          <Link to="/api/unit-types/form/submit">submit</Link> формы. Получает преобразованные данные из mappedValues
          (если она указана) либо напрямую данные из полей формы и объект{' '}
          <Link to="/api/unit-types/form/$meta">meta</Link>.
        </li>
        <li>
          <span className={styles.argumentName}>onSubmitGuardFn</span>: перед выполнением функции onSubmit,проверяется
          значение этого поля. По умолчанию содержит функцию-предикат, которая проверяет, есть ли ошибки валидации в
          полях формы. Если ошибок нет, возвращает true и запускается onSubmit. Можно передать свою функцию-предикат,
          которая будет принимать значения полей формы и объект <Link to="/api/unit-types/form/$meta">meta</Link>.
        </li>
        <li>
          <span className={styles.argumentName}>onChange</span>: функция, которая срабатывает при изменении полей формы
          (onChangeFieldBrowser?). Принимает значения полей формы Values и объект с дополнительными параметрами{' '}
          <Link to="/api/unit-types/form/$meta">meta</Link>.
        </li>
        <li>
          <span className={styles.argumentName}>onChangeGuardFn</span>: перед выполнением функции onChange,проверяется
          значение этого поля. По умолчанию содержит функцию-предикат, которая проверяет, есть ли ошибки валидации в
          полях формы. Если ошибок нет, возвращает true и запускается onChange. Можно передать свою функцию-предикат,
          которая будет принимать значения полей формы и объект <Link to="/api/unit-types/form/$meta">meta</Link>.
        </li>
        <li>
          <span className={styles.argumentName}>initialValues</span>: принимает начальные значения формы.
        </li>
        <li>
          <span className={styles.argumentName}>initialMeta</span>: принимает начальное значение{' '}
          <Link to="/api/unit-types/form/$meta">meta</Link> формы.
        </li>
        <li>
          <span className={styles.argumentName}>domain</span>: принимает домен, в котором будут созданы сторы и события
          формы.
        </li>
        <li>
          <span className={styles.argumentName}>resetOuterErrorsBySubmit</span>: принимает true/false. Определяет, нужно
          ли сбрасывать ошибки формы, на событии onSubmit. Значение по умолчанию true.
        </li>
        <li>
          <span className={styles.argumentName}>resetOuterErrorByOnChange</span>: принимает true/false. Определяет,
          нужно ли сбрасывать ошибки формы, на событии onChange. Значение по умолчанию true.
        </li>
      </ol>
    </div>
  );
};

export default memo(CreateForm);
