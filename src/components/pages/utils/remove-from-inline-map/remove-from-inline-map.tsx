import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { inlineMapExplanation } from './code-examples';

interface IProps {}

const path = 'components.pages.removeFromInlineMap.';

const RemoveFromInlineMap = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>removeFromInlineMap</h1>
      <div>
        <FormattedMessage id={`${path}description1st`} />{' '}
        <Link to="/en/api/unit-types/form/$fields-inline" className="Link">
          $fieldsInline
        </Link>
        <FormattedMessage id={`${path}description2nd`} />
        <CodeHighlighter code={inlineMapExplanation} className="CodeHighlighter" />
        <FormattedMessage id={`${path}description3rd`} />{' '}
        <Link to="/api/hooks/use-field-array" className="Link">
          FieldArray
        </Link>
        <FormattedMessage id={`${path}description4th`} />
      </div>
    </div>
  );
};

export default memo(RemoveFromInlineMap);
