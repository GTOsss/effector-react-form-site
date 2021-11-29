import CodeHighlighter from '@components/code-highlighter';
import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import createFormCode from './create-form-code';

interface IProps {}

const CreateForm = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>createForm</h1>
      <div>
        Метод для создания{' '}
        <Link to="/api/unit-types/form/" className="Link">
          формы
        </Link>
      </div>
      <h2>Формула</h2>
      <CodeHighlighter code={createFormCode} />
      <h2>Аргументы</h2>
      <ol className="List">
        <li>
          <span className="ListItemName">name</span>: название формы
        </li>
        <li>
          <span className="ListItemName">validate</span>: функция для валидации полей формы. Принимает значения полей
          формы Values и объект с дополнительными параметрами{' '}
          <Link to="/api/unit-types/form/$meta" className="Link">
            meta
          </Link>
          . Возвращает объект с ошибками невалидных полей формы.
        </li>
        <li>
          <span className="ListItemName">mapSubmit</span>: функция, преобразующая данные, полученные из полей формы,
          перед передачей их в функцию onSubmit.
        </li>
        <li>
          <span className="ListItemName">onSubmit</span>: функция, которая срабатывает на событии{' '}
          <Link to="/api/unit-types/form/submit" className="Link">
            submit
          </Link>{' '}
          формы. Получает преобразованные данные из mappedValues (если она указана) либо напрямую данные из полей формы
          и объект{' '}
          <Link to="/api/unit-types/form/$meta" className="Link">
            meta
          </Link>
          .
        </li>
        <li>
          <span className="ListItemName">onSubmitGuardFn</span>: перед выполнением функции onSubmit,проверяется значение
          этого поля. По умолчанию содержит функцию-предикат, которая проверяет, есть ли ошибки валидации в полях формы.
          Если ошибок нет, возвращает true и запускается onSubmit. Можно передать свою функцию-предикат, которая будет
          принимать значения полей формы и объект{' '}
          <Link to="/api/unit-types/form/$meta" className="Link">
            meta
          </Link>
          .
        </li>
        <li>
          <span className="ListItemName">onChange</span>: функция, которая срабатывает при изменении полей формы
          (onChangeFieldBrowser?). Принимает значения полей формы Values и объект с дополнительными параметрами{' '}
          <Link to="/api/unit-types/form/$meta" className="Link">
            meta
          </Link>
          .
        </li>
        <li>
          <span className="ListItemName">onChangeGuardFn</span>: перед выполнением функции onChange,проверяется значение
          этого поля. По умолчанию содержит функцию-предикат, которая проверяет, есть ли ошибки валидации в полях формы.
          Если ошибок нет, возвращает true и запускается onChange. Можно передать свою функцию-предикат, которая будет
          принимать значения полей формы и объект{' '}
          <Link to="/api/unit-types/form/$meta" className="Link">
            meta
          </Link>
          .
        </li>
        <li>
          <span className="ListItemName">initialValues</span>: принимает начальные значения формы.
        </li>
        <li>
          <span className="ListItemName">initialMeta</span>: принимает начальное значение{' '}
          <Link to="/api/unit-types/form/$meta" className="Link">
            meta
          </Link>{' '}
          формы.
        </li>
        <li>
          <span className="ListItemName">domain</span>: принимает домен, в котором будут созданы сторы и события формы.
        </li>
        <li>
          <span className="ListItemName">resetOuterErrorsBySubmit</span>: принимает true/false. Определяет, нужно ли
          сбрасывать ошибки формы, на событии onSubmit. Значение по умолчанию true.
        </li>
        <li>
          <span className="ListItemName">resetOuterErrorByOnChange</span>: принимает true/false. Определяет, нужно ли
          сбрасывать ошибки формы, на событии onChange. Значение по умолчанию true.
        </li>
      </ol>
    </div>
  );
};

export default memo(CreateForm);
