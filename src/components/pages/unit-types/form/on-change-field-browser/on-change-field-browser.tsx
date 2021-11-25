import React, { memo } from 'react';

interface IProps {}

const OnChangeFieldBrowser = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>onChangeFieldBrowser</h1>
      <div>
        Событие, которые срабатывает при изменении полей формы. На него можно подписаться через watch, sample и другие
        методы API effector.
      </div>
    </div>
  );
};

export default memo(OnChangeFieldBrowser);
