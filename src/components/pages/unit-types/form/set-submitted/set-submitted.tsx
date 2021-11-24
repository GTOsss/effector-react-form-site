import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';

interface IProps {}

const SetSubmitted = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>setSubmitted</h1>
      <div>
        Выставляет переданное значение в поле submitted стора{' '}
        <Link to="/api/unit-types/form/" className="Link">
          $form
        </Link>
        . Принимает true либо false.
      </div>
    </div>
  );
};

export default memo(SetSubmitted);
