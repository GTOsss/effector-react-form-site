import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { useErrorExample } from './code-examples';

interface IProps {}

const path = 'components.pages.useError.';

const UseError = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>useError</h1>
      <div>
        <FormattedMessage id={`${path}description`} />
      </div>
      <CodeHighlighter code={useErrorExample} className="CodeHighlighter" />
      <ol className="List">
        <li>
          <span className="ListItemName">inputValue</span>: <FormattedMessage id={`${path}inputValueDescription`} />
        </li>
        <li>
          <span className="ListItemName">form</span>: <FormattedMessage id={`${path}formDescription1st`} />{' '}
          <Link to="/api/unit-types/form/$form" className="Link">
            $form
          </Link>{' '}
          <FormattedMessage id={`${path}formDescription2nd`} />
        </li>
        <li>
          <span className="ListItemName">meta</span>: <FormattedMessage id={`${path}metaDescription1st`} />{' '}
          <Link to="/api/unit-types/form/$meta" className="Link">
            $meta
          </Link>{' '}
          <FormattedMessage id={`${path}metaDescription2nd`} />
        </li>
        <li>
          <span className="ListItemName">fieldState</span>: <FormattedMessage id={`${path}fieldStateDescription1st`} />{' '}
          <Link to="/api/unit-types/form/$fields-inline" className="Link">
            $fieldsInline
          </Link>{' '}
          <FormattedMessage id={`${path}fieldStateDescription2nd`} />
        </li>
        <li>
          <span className="ListItemName">error</span>: <FormattedMessage id={`${path}errorDescription1st`} />{' '}
          <Link to="/api/unit-types/form/$meta" className="Link">
            $outerErrorsInline
          </Link>{' '}
          <FormattedMessage id="components.all.or" />{' '}
          <Link to="/api/unit-types/form/$errors-inline" className="Link">
            $errorsInline
          </Link>
          <FormattedMessage id={`${path}errorDescription2nd`} />
        </li>
        <li>
          <span className="ListItemName">innerError</span>: <FormattedMessage id={`${path}innerErrorDescription`} />{' '}
          <Link to="/api/unit-types/form/$errros-inline" className="Link">
            $errorsInline
          </Link>
          .
        </li>
        <li>
          <span className="ListItemName">outerError</span>: <FormattedMessage id={`${path}outerErrorDescription`} />{' '}
          <Link to="/api/unit-types/form/$meta" className="Link">
            $outerErrorsInline
          </Link>
          .
        </li>
        <li>
          <span className="ListItemName">isShowError</span>: <FormattedMessage id={`${path}isShowErrorDescription`} />
        </li>
        <li>
          <span className="ListItemName">isShowOuterError</span>:{' '}
          <FormattedMessage id={`${path}isShowOuterErrorDescription`} />
        </li>
        <li>
          <span className="ListItemName">isShowInnerError</span>:{' '}
          <FormattedMessage id={`${path}isShowInnerErrorDescription`} />
        </li>
      </ol>
    </div>
  );
};

export default memo(UseError);
