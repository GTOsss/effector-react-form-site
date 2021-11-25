import React, { memo } from 'react';

interface IProps {}

const OnFocusFieldBrowser = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>onFocusFieldBrowser</h1>
      <div>
        Событие, которые срабатывает при фокусе на поле формы. На него можно подписаться через watch, sample и другие
        методы API effector.
      </div>
    </div>
  );
};

export default memo(OnFocusFieldBrowser);
