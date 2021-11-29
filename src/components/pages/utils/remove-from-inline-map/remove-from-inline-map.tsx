import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const RemoveFromInlineMap = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>RemoveFromInlineMap</h1>
    </div>
  );
};

export default memo(RemoveFromInlineMap);
