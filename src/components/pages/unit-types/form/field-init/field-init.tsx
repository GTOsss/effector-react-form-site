import React, { memo } from 'react';

interface IProps {}

const FieldInit = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>FieldInit</h1>
      <div>Событие, срабатывающее при инициализации поля формы</div>
    </div>
  );
};

export default memo(FieldInit);
