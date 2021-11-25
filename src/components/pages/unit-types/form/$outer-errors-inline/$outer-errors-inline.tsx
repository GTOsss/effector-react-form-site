import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';

interface IProps {}

const OuterErrorsInline = ({}: IProps) => {
  return (
    <div className="componentRoot">
      <h1>$outerErrorsInline</h1>
      <div>
        Стор, предназначенный для ошибок{' '}
        <Link to="/examples/server-side-validation" className="Link">
          серверной валидации
        </Link>
        . В отличие от ошибок в{' '}
        <Link to="/unit-types/form/$errors-inline" className="Link">
          $errorsInline
        </Link>
        , внешние ошибки не блокируют отправку формы. После изменения значений полей, внешние ошибки скрываются, но
        остаются в состоянии формы. После отправки ошибки будут отображаться снова, пока поля не изменятся.
      </div>
    </div>
  );
};

export default memo(OuterErrorsInline);
