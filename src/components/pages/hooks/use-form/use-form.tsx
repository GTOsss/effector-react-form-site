import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { controllerResult, useFormExample } from './code-examples';

interface IProps {}

const path = 'components.pages.useForm.';

const UseForm = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>useForm</h1>
      <div>
        <FormattedMessage id={`${path}description1st`} />
        <ol className="List">
          <li>
            <span className="ListItemName">form</span>: <FormattedMessage id={`${path}formDescription`} />
          </li>
          <li>
            <span className="ListItemName">meta</span>: <FormattedMessage id={`${path}metaDescription1st`} />{' '}
            <Link to="/api/unit-types/$meta" className="Link">
              $meta
            </Link>
            <FormattedMessage id={`${path}metaDescription2nd`} />
          </li>
          <li>
            <span className="ListItemName">resetUnmount</span>:{' '}
            <FormattedMessage id={`${path}resetUnmountDescription`} />
          </li>
        </ol>
        <CodeHighlighter code={useFormExample} className="CodeHighlighter" />
        <FormattedMessage id={`${path}description2nd`} />
      </div>
      <ol className="List">
        <li>
          <span className="ListItemName">controller</span>: <FormattedMessage id={`${path}controllerDescription`} />
          <ul className="List">
            <li>
              <span className="ListItemName">name</span>: <FormattedMessage id={`${path}nameDescription`} />{' '}
              <Link to="/api/unit-types/form/get-name" className="Link">
                getName
              </Link>
              .
            </li>
            <li>
              <span className="ListItemName">flat</span>: <FormattedMessage id={`${path}flatDescription`} />
            </li>
            <li>
              <span className="ListItemName">validate</span>: <FormattedMessage id={`${path}validateDescription`} />
            </li>
          </ul>
          <FormattedMessage id={`${path}description3rd`} />
          <CodeHighlighter code={controllerResult} className="CodeHighlighter" />
          <ul className="List">
            <li>
              <span className="ListItemName">input</span>:
              <ul className="List">
                <li>
                  <span className="ListItemName">name</span>: <FormattedMessage id={`${path}input.name`} />{' '}
                  <Link to="/api/unit-types/form/" className="Link">
                    $form
                  </Link>
                  .
                </li>
                <li>
                  <span className="ListItemName">value</span>: <FormattedMessage id={`${path}input.value`} />.
                </li>
                <li>
                  <span className="ListItemName">onChange</span>: <FormattedMessage id={`${path}input.onChange`} />{' '}
                  <Link to="/api/unit-types/form/" className="Link">
                    $form
                  </Link>
                  .
                </li>
              </ul>
              <Link to="/api/unit-types/form/$meta" className="Link">
                {' '}
              </Link>
            </li>
            <li>
              <span className="ListItemName">form</span>:{' '}
              <Link to="/api/unit-types/form/$form" className="Link">
                <FormattedMessage id={`${path}formController`} />
              </Link>
              .
            </li>
            <li>
              <span className="ListItemName">meta</span>:{' '}
              <Link to="/api/unit-types/form/$meta" className="Link">
                <FormattedMessage id={`${path}metaController`} />
              </Link>
              .
            </li>
            <li>
              <span className="ListItemName">fieldState</span>: <FormattedMessage id={`${path}fieldState`} />{' '}
              <Link to="/api/unit-types/form/$fields-inline" className="Link">
                $fieldsInline
              </Link>
              .
            </li>
            <li>
              <span className="ListItemName">error</span>: <FormattedMessage id={`${path}error1st`} />{' '}
              <Link to="/api/unit-types/form/$meta" className="Link">
                $outerErrorsInline
              </Link>{' '}
              <FormattedMessage id="components.all.or" />{' '}
              <Link to="/api/unit-types/form/$errors-inline" className="Link">
                $errorsInline
              </Link>
              <FormattedMessage id={`${path}error2nd`} />
            </li>
            <li>
              <span className="ListItemName">innerError</span>: <FormattedMessage id={`${path}innerError`} />{' '}
              <Link to="/api/unit-types/form/$errors-inline" className="Link">
                $errorsInline
              </Link>
              .
            </li>
            <li>
              <span className="ListItemName">outerError</span>: <FormattedMessage id={`${path}outerError`} />{' '}
              <Link to="/api/unit-types/form/$meta" className="Link">
                $outerErrorsInline
              </Link>
              .
            </li>
            <li>
              <span className="ListItemName">isShowError</span>: <FormattedMessage id={`${path}isShowError`} />
            </li>
            <li>
              <span className="ListItemName">isShowOuterError</span>:{' '}
              <FormattedMessage id={`${path}isShowOuterError`} />
            </li>
            <li>
              <span className="ListItemName">isShowInnerError</span>:{' '}
              <FormattedMessage id={`${path}isShowInnerError`} />
            </li>
            <li>
              <span className="ListItemName">validate</span>: <FormattedMessage id={`${path}validate`} />
            </li>
            <li>
              <span className="ListItemName">setFieldState</span>:<FormattedMessage id={`${path}method1st`} />
              <Link to="/api/unit-types/form/set-field-state" className="Link">
                setFieldState
              </Link>
              <FormattedMessage id={`${path}method2nd`} />
            </li>
            <li>
              <span className="ListItemName">setOrDeleteError</span>:<FormattedMessage id={`${path}method1st`} />
              <Link to="/api/unit-types/form/set-or-delete-error" className="Link">
                setOrDeleteError
              </Link>
              <FormattedMessage id={`${path}method2nd`} />
            </li>
            <li>
              <span className="ListItemName">setOrDeleteOuterError</span>:<FormattedMessage id={`${path}method1st`} />
              <Link to="/api/unit-types/form/set-or-delete-outer-error" className="Link">
                setOrDeleteOuterError
              </Link>
              <FormattedMessage id={`${path}method2nd`} />
            </li>
            <li>
              <span className="ListItemName">setOuterErrorsInlineState</span>:
              <FormattedMessage id={`${path}method1st`} />
              <Link to="/api/unit-types/form/set-outer-errors-inline-state" className="Link">
                setOuterErrorsInlineState
              </Link>
              <FormattedMessage id={`${path}method2nd`} />
            </li>
          </ul>
        </li>
        <li>
          <span className="ListItemName">handleSubmit</span>: <FormattedMessage id={`${path}handleSubmit`} />
        </li>
      </ol>
    </div>
  );
};

export default memo(UseForm);
