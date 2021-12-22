import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';

interface IProps {}

const path = 'components.pages.$allFormState.';

const AllFormState = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>$allFormState</h1>
      <div>
        <FormattedMessage id={`${path}description`} />:
      </div>
      <ol className="List">
        <li>
          <Link to="/api/unit-types/form/$values" className="Link">
            $values
          </Link>
        </li>
        <li>
          <Link to="/api/unit-types/form/$errors-inline" className="Link">
            $errorsInline
          </Link>
        </li>
        <li>
          <Link to="/api/unit-types/form/$outer-errors-inline" className="Link">
            $outerErrorsInline
          </Link>
        </li>
        <li>
          <Link to="/api/unit-types/form/$fields-inline" className="Link">
            $fieldsInline
          </Link>
        </li>
        <li>
          <Link to="/api/unit-types/form/$form" className="Link">
            $form
          </Link>
        </li>
        <li>
          <Link to="/api/unit-types/form/$meta" className="Link">
            $meta
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default memo(AllFormState);
