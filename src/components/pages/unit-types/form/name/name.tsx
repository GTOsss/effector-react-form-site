import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';

interface IProps {}

const Name = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>Name</h1>
      <div>
        Содержит имя, переданное при{' '}
        <Link to="/api/unit-creators/create-form" className="Link">
          инициализации формы
        </Link>
        .
      </div>
    </div>
  );
};

export default memo(Name);
