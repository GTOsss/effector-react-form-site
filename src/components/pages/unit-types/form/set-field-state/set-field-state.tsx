import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { setFieldsInlineExample, setFieldStateType, setOrDeleteErrorExample } from './code-examples';
import WithSetFieldState from './examples/with-set-field-state';
import WithoutSetFieldState from './examples/without-set-field-state';

interface IProps {}

const path = 'components.pages.setFieldState.';

const SetFieldState = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>setFieldState</h1>
      <div>
        <FormattedMessage id={`${path}description1st`} />{' '}
        <Link to="/api/unit-types/form/$fields-inline" className="Link">
          $fieldsInline
        </Link>
        .
      </div>
      <CodeHighlighter code={setFieldStateType} className="CodeHighlighter" />
      <FormattedMessage id={`${path}description2nd`} />
      <CodeHighlighter code={setOrDeleteErrorExample} className="CodeHighlighter" />
      <h2>
        <FormattedMessage id="components.all.Result" />
      </h2>
      <WithoutSetFieldState />
      <div>
        {' '}
        <FormattedMessage id={`${path}description3rd`} />{' '}
        <Link to="/api/unit-types/form/$fields-inline" className="Link">
          $fieldsInline
        </Link>
        .
        <br />
        <FormattedMessage id={`${path}description4th`} />
      </div>
      <CodeHighlighter code={setFieldsInlineExample} className="CodeHighlighter" />
      <h2>
        <FormattedMessage id="components.all.Result" />
      </h2>
      <WithSetFieldState />
      <div>
        <FormattedMessage id={`${path}description5th`} />{' '}
        <Link to="/api/unit-types/form/$fields-inline" className="Link">
          <FormattedMessage id="components.all.here" />
        </Link>
        .
      </div>
    </div>
  );
};

export default memo(SetFieldState);
