import CodeHighlighter from '@components/code-highlighter';
import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import createFieldArrayCode from './create-field-array-code/';
import styles from './styles.module.scss';

interface IProps {}

const CreateFieldArray = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>createFieldArray</h1>
      <div>
        Метод для создания{' '}
        <Link to="/api/unit-types/field-array" className="Link">
          массива полей
        </Link>
      </div>
      <h2>Формула</h2>
      <CodeHighlighter code={createFieldArrayCode} />
      <h2>Аргументы</h2>
      <ol className="List">
        <li>
          <span className="ListItemName">form</span>: принимает{' '}
          <Link to="/api/unit-types/form/" className="Link">
            форму
          </Link>
          , на основании полей которой будет создан массив.
        </li>
        <li>
          <span className="ListItemName">domain</span>: принимает домен, в котором будут созданы сторы и события
          массива.
        </li>
      </ol>
    </div>
  );
};

export default memo(CreateFieldArray);
