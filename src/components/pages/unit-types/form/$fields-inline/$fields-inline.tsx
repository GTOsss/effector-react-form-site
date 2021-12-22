import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { formula } from './code-examples';

interface IProps {}

const path = 'components.pages.$fieldsInline.';

const FieldsInline = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>$fieldsInline</h1>
      <div>
        <FormattedMessage id={`${path}description1st`} />{' '}
        <Link to="/api/unit-types/form/" className="Link">
          <FormattedMessage id="components.all.ofForm" />
        </Link>
        <FormattedMessage id={`${path}description2nd`} />
      </div>
      <CodeHighlighter code={formula} className="CodeHighlighter" />
      <h2>
        <FormattedMessage id={`${path}Properties`} />
      </h2>
      <ol className="List">
        <li>
          <span className="ListItemName">active</span>: <FormattedMessage id={`${path}activeDescription`} />
        </li>
        <li>
          <span className="ListItemName">touched</span>: <FormattedMessage id={`${path}touchedDescription`} />
        </li>
        <li>
          <span className="ListItemName">changed</span>: <FormattedMessage id={`${path}changedDescription`} />
        </li>
        <li>
          <span className="ListItemName">blurred</span>: <FormattedMessage id={`${path}blurredDescription`} />{' '}
          <Link to="/api/hooks/use-form" className="Link">
            <FormattedMessage id={`${path}here`} />
          </Link>
          .
        </li>
        <li>
          <span className="ListItemName">touchedAfterOuterError</span>:{' '}
          <FormattedMessage id={`${path}touchedAfterOuterErrorDescription1st`} />{' '}
          <Link to="/api/unit-types/form/$outer-errors-inline" className="Link">
            $outerErrorsInline
          </Link>{' '}
          <FormattedMessage id={`${path}touchedAfterOuterErrorDescription2nd`} />
        </li>
        <li>
          <span className="ListItemName">changedAfterOuterError</span>:{' '}
          <FormattedMessage id={`${path}changedAfterOuterErrorDescription1st`} />{' '}
          <Link to="/api/unit-types/form/$outer-errors-inline" className="Link">
            $outerErrorsInline
          </Link>{' '}
          <FormattedMessage id={`${path}changedAfterOuterErrorDescription2nd`} />
        </li>
        <li>
          <span className="ListItemName">blurredAfterOuterError</span>:
          <FormattedMessage id={`${path}blurredAfterOuterErrorDescription1st`} />{' '}
          <Link to="/api/unit-types/form/$outer-errors-inline" className="Link">
            $outerErrorsInline
          </Link>{' '}
          <FormattedMessage id={`${path}blurredAfterOuterErrorDescription2nd`} />{' '}
          <Link to="/api/hooks/use-form" className="Link">
            <FormattedMessage id={`${path}here`} />
          </Link>
          .
        </li>
        <li>
          <span className="ListItemName">validate</span>: <FormattedMessage id={`${path}validateDescription`} />
        </li>
      </ol>
    </div>
  );
};

export default memo(FieldsInline);
