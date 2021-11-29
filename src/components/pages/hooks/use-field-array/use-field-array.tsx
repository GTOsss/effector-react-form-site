import CodeHighlighter from '@components/code-highlighter';
import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { mapReturn, useFieldArrayExample } from './code-examples';

interface IProps {}

const UseFieldArray = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>useFieldArray</h1>
      <div>
        Хук для использования{' '}
        <Link to="/en/api/unit-types/field-array" className="Link">
          fieldArray
        </Link>{' '}
        в функциональному компоненте. Принимает в качестве аргумента объект{' '}
        <Link to="/en/api/unit-types/field-array" className="Link">
          fieldArray
        </Link>{' '}
        и имя поля формы, содержащего массив. Помимо методов push и remove, предоставляет так же метод map для перебора
        массива значений.
      </div>
      <br />
      <div>
        Использование методов push и remove, которые возвращает хук useFieldArray, немного отличается от одноимённых
        методов, доступных напрямую из объекта{' '}
        <Link to="/en/api/unit-types/field-array" className="Link">
          fieldArray
        </Link>
        . Отличие состоит в том, что они метод push принимает только значение, которое нужно добавить в массив, а remove
        принимает лишь индекс элемента, который следует удалить из массива. Параметр fieldName уже не нужен, так как мы
        передали его в хук useFieldArray.
      </div>
      <br />
      <div>Метод map перебирает массив значений, возвращая для каждого поля объект:</div>
      <CodeHighlighter code={mapReturn} className="CodeHighlighter" />
      <ol className="List">
        <li>
          <span className="ListItemName">field</span>: содержит значение поля.
        </li>
        <li>
          <span className="ListItemName">fields</span>: содержит полный массив.
        </li>
        <li>
          <span className="ListItemName">formItemName</span>: имя поля. Является конкатенацией через точку имени поля,
          содержащего массив и индексом элемента.
        </li>
        <li>
          <span className="ListItemName">index</span>: индекс элемента.
        </li>
      </ol>
      <h2>Пример использования</h2>
      <CodeHighlighter code={useFieldArrayExample} className="CodeHighlighter" />
    </div>
  );
};

export default memo(UseFieldArray);
