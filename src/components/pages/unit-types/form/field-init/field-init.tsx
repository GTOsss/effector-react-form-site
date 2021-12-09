import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { fieldInitExample } from './code-examples';

interface IProps {}

const path = 'components.pages.fieldInit.';

const FieldInit = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>fieldInit</h1>
      <div>
        <FormattedMessage id={`${path}description`} />
      </div>
      <ol className="List">
        <li>
          <span className="ListItemName">name</span>: <FormattedMessage id={`${path}name`} />
        </li>
        <li>
          <span className="ListItemName">validate</span>: <FormattedMessage id={`${path}validate`} />
        </li>
        <li>
          <span className="ListItemName">flat</span>: <FormattedMessage id={`${path}flat`} />
        </li>
      </ol>
      <div>
        <FormattedMessage id={`${path}descriptionController`} />{' '}
        <Link to="/api/hooks/use-form" className="Link">
          <FormattedMessage id="components.all.here" />
        </Link>
        .
      </div>
      <CodeHighlighter code={fieldInitExample} className="CodeHighlighter" />
    </div>
  );
};

export default memo(FieldInit);
