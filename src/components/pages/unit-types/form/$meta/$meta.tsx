import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { hookMeta, initMeta } from './code-examples';

interface IProps {}

const path = 'components.pages.$meta.';

const Meta = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>$meta</h1>
      <div>
        <FormattedMessage id={`${path}description1st`} />{' '}
        <Link to="/api/unit-creators/create-form" className="Link">
          <FormattedMessage id={`${path}formInitialization`} />
        </Link>
        :
      </div>
      <CodeHighlighter code={initMeta} className="CodeHighlighter" />
      <div>
        <FormattedMessage id={`${path}description2nd`} />{' '}
        <Link to="/api/hooks/use-form" className="Link">
          <FormattedMessage id={`${path}useFormHook`} />
        </Link>
        :
      </div>
      <CodeHighlighter code={hookMeta} className="CodeHighlighter" />
    </div>
  );
};

export default memo(Meta);
