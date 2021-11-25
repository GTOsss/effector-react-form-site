import React, { memo } from 'react';

interface IProps {}

const OnChangeFieldBrowser = ({}: IProps) => {
  return (
    <div className="componentRoot">
      <h1>onChangeFieldBrowser</h1>
      <div>Событие, которые срабатывает при изменении полей формы.</div>
    </div>
  );
};

export default memo(OnChangeFieldBrowser);
