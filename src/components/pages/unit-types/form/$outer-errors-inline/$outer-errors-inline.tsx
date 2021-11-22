import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';

interface IProps {}

const OuterErrorsInline = ({}: IProps) => {
  return (
    <div className="componentRoot">
      <h1>$outerErrorsInline</h1>
      <div>
        Стор, содержащий ошибки, добавленные вручную. Используется для{' '}
        <Link to="/examples/server-side-validation" className="Link">
          серверной валидации
        </Link>
        .
      </div>
    </div>
  );
};

export default memo(OuterErrorsInline);
