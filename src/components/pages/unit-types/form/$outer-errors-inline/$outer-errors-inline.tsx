import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';

interface IProps {}

const OuterErrorsInline = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
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
      <br />
      <div>
        Установить внешние ошибки можно при помощи сетеров{' '}
        <Link to="/api/unit-types/form/set-or-delete-outer-error" className="Link">
          setOrDeleteOuterError
        </Link>{' '}
        и{' '}
        <Link to="/api/unit-types/form/set-outer-errors-inline-state" className="Link">
          setOuterErrorsInlineState
        </Link>
        .
      </div>
    </div>
  );
};

export default memo(OuterErrorsInline);
