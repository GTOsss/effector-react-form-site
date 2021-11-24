import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
interface IProps {}

const ResetOuterErrors = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>resetOuterErrors</h1>
      <div>
        Устанавливает пустой объект в{' '}
        <Link to="/api/unit-types/$outer-errors-inline" className="Link">
          $outerErrorsInline
        </Link>
        .
      </div>
    </div>
  );
};

export default memo(ResetOuterErrors);
