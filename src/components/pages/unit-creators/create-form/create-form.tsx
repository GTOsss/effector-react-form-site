import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import createFormCode from './create-form-code';

interface IProps {}

const path = 'components.pages.createForm.';

const CreateForm = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>createForm</h1>
      <div>
        <FormattedMessage id={`${path}methodForCreating`} />{' '}
        <Link to="/api/unit-types/form/" className="Link">
          <FormattedMessage id="components.all.ofForm" />
        </Link>
        .
      </div>
      <h2>
        <FormattedMessage id={`${path}Formula`} />
      </h2>
      <CodeHighlighter code={createFormCode} />
      <h2>
        <FormattedMessage id={`${path}Arguments`} />
      </h2>
      <ol className="List">
        <li>
          <span className="ListItemName">name</span>: <FormattedMessage id={`${path}formName`} />.
        </li>
        <li>
          <span className="ListItemName">validate</span>: <FormattedMessage id={`${path}validateDescription1st`} />{' '}
          <Link to="/api/unit-types/form/$meta" className="Link">
            meta
          </Link>
          . <FormattedMessage id={`${path}validateDescription2nd`} />.
        </li>
        <li>
          <span className="ListItemName">mapSubmit</span>: <FormattedMessage id={`${path}mapSubmitDescription`} />.
        </li>
        <li>
          <span className="ListItemName">onSubmit</span>: <FormattedMessage id={`${path}onSubmitDescription1st`} />{' '}
          <Link to="/api/unit-types/form/submit" className="Link">
            submit
          </Link>{' '}
          <FormattedMessage id={`${path}onSubmitDescription2nd`} />{' '}
          <Link to="/api/unit-types/form/$meta" className="Link">
            meta
          </Link>
          .
        </li>
        <li>
          <span className="ListItemName">onSubmitGuardFn</span>:{' '}
          <FormattedMessage id={`${path}onSubmitGuardDescription`} />{' '}
          <Link to="/api/unit-types/form/$meta" className="Link">
            meta
          </Link>
          .
        </li>
        <li>
          <span className="ListItemName">onChange</span>: <FormattedMessage id={`${path}onChangeDescription`} />{' '}
          <Link to="/api/unit-types/form/$meta" className="Link">
            meta
          </Link>
          .
        </li>
        <li>
          <span className="ListItemName">onChangeGuardFn</span>:{' '}
          <FormattedMessage id={`${path}onChangeGuardFnDescription`} />{' '}
          <Link to="/api/unit-types/form/$meta" className="Link">
            meta
          </Link>
          .
        </li>
        <li>
          <span className="ListItemName">initialValues</span>:{' '}
          <FormattedMessage id={`${path}initialValuesDescription`} />.
        </li>
        <li>
          <span className="ListItemName">initialMeta</span>:{' '}
          <FormattedMessage id={`${path}initialMetaDescription1st`} />{' '}
          <Link to="/api/unit-types/form/$meta" className="Link">
            meta
          </Link>
          <FormattedMessage id={`${path}initialMetaDescription2nd`} />
        </li>
        <li>
          <span className="ListItemName">domain</span>: <FormattedMessage id={`${path}domainDescription`} />.
        </li>
        <li>
          <span className="ListItemName">resetOuterErrorsBySubmit</span>:{' '}
          <FormattedMessage id={`${path}resetOuterErrorsBySubmitDescription`} />
        </li>
        <li>
          <span className="ListItemName">resetOuterErrorByOnChange</span>:{' '}
          <FormattedMessage id={`${path}resetOuterErrorsByOnChangeDescription`} />
        </li>
      </ol>
    </div>
  );
};

export default memo(CreateForm);
