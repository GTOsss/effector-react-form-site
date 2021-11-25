import React, { memo } from 'react';

interface IProps {}

const OnBlurFieldBrowser = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>OnBlurFieldBrowser</h1>
      <div>
        Событие, которые при потере фокуса на поле формы. На него можно подписаться через watch, sample и другие методы
        API effector.
      </div>
    </div>
  );
};

export default memo(OnBlurFieldBrowser);
