import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';

interface IProps {}

const ErrorsInline = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>$errorsInline</h1>
      <div>
        Стор, содержащий ошибки валидации. Это могут быть как ошибки, созданные функцией{' '}
        <Link to="/examples/field-level-validation" className="Link">
          валидации
        </Link>
        , так и ошибки, добавленные вручную с помощью методов{' '}
        <Link to="/api/unit-types/form/set-or-delete-error" className="Link">
          setOrDeleteError
        </Link>{' '}
        и{' '}
        <Link to="/api/unit-types/form/set-errors-inline-state" className="Link">
          setErrorsInlineState
        </Link>
        .
      </div>
    </div>
  );
};

export default memo(ErrorsInline);
