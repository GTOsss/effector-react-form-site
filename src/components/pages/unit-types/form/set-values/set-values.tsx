import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { setValuesExample } from './code-examples';

interface IProps {}

const path = 'components.pages.setValues.';

const SetValues = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>SetValues</h1>
      <div>
        <FormattedMessage id={`${path}description`} />{' '}
        <Link to="/api/unit-types/form/$values" className="Link">
          $values
        </Link>{' '}
        <FormattedMessage id="components.all.ofTheForm" />.
        <h2>
          <FormattedMessage id="components.all.usageExample" />
        </h2>
        <CodeHighlighter code={setValuesExample} className="CodeHighlighter" />
      </div>
    </div>
  );
};

export default memo(SetValues);
