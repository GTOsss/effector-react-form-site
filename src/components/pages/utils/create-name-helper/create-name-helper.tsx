import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const CreateNameHelper = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>CreateNameHelper</h1>
    </div>
  );
};

export default memo(CreateNameHelper);
