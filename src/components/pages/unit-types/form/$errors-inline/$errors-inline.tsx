import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';

interface IProps {}

const ErrorsInline = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>$errorsInline</h1>
      <div>
        Стор, содержащий ошибки, созданные функцией{' '}
        <Link to="/examples/field-level-validation" className="Link">
          валидации
        </Link>
        .
      </div>
    </div>
  );
};

export default memo(ErrorsInline);
