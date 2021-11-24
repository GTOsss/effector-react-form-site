import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const ResetOuterFieldStateFlags = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>resetOuterFieldStateFlags</h1>
      <div>
        Сбрасывает поля blurredAfterOuterError, changedAfterOuterError, touchedAfterOuterError стора{' '}
        <Link to="/api/unit-types/form/$fields-inline" className="Link">
          $fieldsInline
        </Link>{' '}
        в значения по умолчанию.
      </div>
    </div>
  );
};

export default memo(ResetOuterFieldStateFlags);
