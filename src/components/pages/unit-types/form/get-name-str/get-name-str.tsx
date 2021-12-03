import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { getNameStrCode } from './code-examples';

interface IProps {}

const path = 'components.pages.getNameStr.';

const GetNameStr = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>getNameStr</h1>
      <div>
        <FormattedMessage id={`${path}description1st`} />{' '}
        <Link to="/api/unit-types/form/$fields-inline/" className="Link">
          $fieldsInline
        </Link>
        <FormattedMessage id={`${path}description2nd`} />
      </div>
      <CodeHighlighter code={getNameStrCode} className="CodeHighlighter" />
    </div>
  );
};

export default memo(GetNameStr);
