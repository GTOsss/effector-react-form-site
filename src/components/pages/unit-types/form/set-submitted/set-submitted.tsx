import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { setSubmittedExample } from './code-examples';

interface IProps {}

const path = 'components.pages.setSubmitted.';

const SetSubmitted = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>setSubmitted</h1>
      <div>
        <FormattedMessage id={`${path}description1st`} />{' '}
        <Link to="/api/unit-types/form/" className="Link">
          $form
        </Link>
        <FormattedMessage id={`${path}description2nd`} />
        <CodeHighlighter code={setSubmittedExample} className="CodeHighlighter" />
      </div>
    </div>
  );
};

export default memo(SetSubmitted);
