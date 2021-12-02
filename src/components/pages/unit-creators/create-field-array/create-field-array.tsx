import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import createFieldArrayCode from './create-field-array-code/';

interface IProps {}

const path = 'components.pages.createFieldArray.';

const CreateFieldArray = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>createFieldArray</h1>
      <div>
        <FormattedMessage id={`${path}methodForCreating`} />{' '}
        <Link to="/api/unit-types/field-array" className="Link">
          <FormattedMessage id="components.all.ofFieldArray" />
        </Link>
        .
      </div>
      <h2>
        <FormattedMessage id={`${path}Formula`} />
      </h2>
      <CodeHighlighter code={createFieldArrayCode} />
      <h2>
        <FormattedMessage id={`${path}Arguments`} />
      </h2>
      <ol className="List">
        <li>
          <span className="ListItemName">form</span>: <FormattedMessage id={`${path}takes`} />{' '}
          <Link to="/api/unit-types/form/" className="Link">
            <FormattedMessage id={`${path}form`} />
          </Link>{' '}
          <FormattedMessage id={`${path}formDescription`} />
        </li>
        <li>
          <span className="ListItemName">domain</span>: <FormattedMessage id={`${path}domainDescription`} />
        </li>
      </ol>
    </div>
  );
};

export default memo(CreateFieldArray);
