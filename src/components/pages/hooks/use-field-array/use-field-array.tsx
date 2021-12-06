import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { mapReturn, useFieldArrayExample } from './code-examples';

interface IProps {}

const path = 'components.pages.useFieldArray.';

const UseFieldArray = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>useFieldArray</h1>
      <div>
        <FormattedMessage id={`${path}description1st`} />{' '}
        <Link to="/en/api/unit-types/field-array" className="Link">
          fieldArray
        </Link>{' '}
        <FormattedMessage id={`${path}description2nd`} />{' '}
        <Link to="/en/api/unit-types/field-array" className="Link">
          fieldArray
        </Link>{' '}
        <FormattedMessage id={`${path}description3rd`} />
      </div>
      <br />
      <div>
        <FormattedMessage id={`${path}description4th`} />{' '}
        <Link to="/en/api/unit-types/field-array" className="Link">
          fieldArray
        </Link>
        <FormattedMessage id={`${path}description5th`} />
      </div>
      <br />
      <div>
        <FormattedMessage id={`${path}description6th`} />
      </div>
      <CodeHighlighter code={mapReturn} className="CodeHighlighter" />
      <ol className="List">
        <li>
          <span className="ListItemName">field</span>: <FormattedMessage id={`${path}field`} />
        </li>
        <li>
          <span className="ListItemName">fields</span>: <FormattedMessage id={`${path}fields`} />
        </li>
        <li>
          <span className="ListItemName">formItemName</span>: <FormattedMessage id={`${path}formItemName`} />
        </li>
        <li>
          <span className="ListItemName">index</span>: <FormattedMessage id={`${path}index`} />
        </li>
      </ol>
      <h2>
        <FormattedMessage id="components.all.usageExample" />
      </h2>
      <CodeHighlighter code={useFieldArrayExample} className="CodeHighlighter" />
    </div>
  );
};

export default memo(UseFieldArray);
