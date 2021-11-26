import React, { memo } from 'react';
import { Link } from 'gatsby-plugin-intl';

interface IProps {}

const Form = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>form</h1>
      <div>
        Форма, переданная при{' '}
        <Link to="/api/unit-creators/create-form" className="Link">
          инициализации
        </Link>
        .
      </div>
    </div>
  );
};

export default memo(Form);
