import CodeHighlighter from '@components/code-highlighter';
import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { useFormExample } from './code-examples';
import UseFormExample from './example/use-form-example';

interface IProps {}

const UseForm = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>useForm</h1>
      <div>
        Хук для использования формы внутри функционального компонента. Принимает объект с полем form, meta и
        resetUnmount.
        <CodeHighlighter code={useFormExample} className="CodeHighlighter" />
        Принцип работы вовзращаемых методов мы уже рассматривали выше, за исключением лишь controller и handleSubmit,
        так что здесь мы поговорим о них.
      </div>
      <ol className="List">
        <li>
          <span className="ListItemName">controller</span>: функция, которая возвращает объект с методами для управления
          полем формы. При вызове принимает объект с полями name, flat и validate.
          <ul className="List">
            <li>
              <span className="ListItemName">name</span>: имя поля. Вложенные поля можно задавать с испльзованием{' '}
              <Link to="/api/unit-types/form/get-name" className="Link">
                getName
              </Link>{' '}
              и{' '}
              <Link to="/api/unit-types/form/get-name-str" className="Link">
                getNameStr
              </Link>
              .
            </li>
            <li>
              <span className="ListItemName">flat</span>:
            </li>
            <li>
              <span className="ListItemName">validate</span>: принимает функцию валидации для поля формы.
            </li>
          </ul>
        </li>
        <li>
          <span className="ListItemName">handleSubmit</span>: метод для передачи в обработчик onSubmit формы. Отменяет
          действия по умолчанию события onSubmit.
        </li>
      </ol>
      <UseFormExample />
    </div>
  );
};

export default memo(UseForm);
