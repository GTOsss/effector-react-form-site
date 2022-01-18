import CodeHighlighter from '@components/code-highlighter';
import Spoiler from '@components/spoiler';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import {
  mapSubmitExample,
  mapSubmitTypes,
  onChangeExample,
  onChangeGuardExample,
  onChangeGuardsTypes,
  onChangeTypes,
  onSubmitExample,
  onSubmitGuardExample,
  onSubmitGuardsTypes,
  onSubmitTypes,
  validateExample,
  validateTypes,
} from './code-examples';
import createFormCode from './create-form-code';

interface IProps {}

const path = 'components.pages.createForm.';

const CreateForm = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>createForm</h1>
      <div>
        <FormattedMessage id={`${path}methodForCreating`} />{' '}
        <Link to="/api/unit-types/form/" className="Link">
          <FormattedMessage id="components.all.ofForm" />
        </Link>
        .
      </div>
      <h2>
        <FormattedMessage id={`${path}Formula`} />
      </h2>
      <CodeHighlighter code={createFormCode} className="CodeHighlighter" />
      <h2>
        <FormattedMessage id={`${path}Arguments`} />
      </h2>
      <ol className="List">
        <li>
          <span className="ListItemName">name</span>: <FormattedMessage id={`${path}formName`} />.
        </li>
        <li>
          <span className="ListItemName">validate</span>: <FormattedMessage id={`${path}validateDescription1st`} />{' '}
          <Link to="/api/unit-types/form/$values" className="Link">
            $values
          </Link>
          <FormattedMessage id={`${path}validateDescription1.5`} />{' '}
          <Link to="/api/unit-types/form/$meta" className="Link">
            meta
          </Link>
          <FormattedMessage id={`${path}validateDescription2nd`} />{' '}
          <Link to="/api/unit-types/form/$fields-inline" className="Link">
            $fieldsInline
          </Link>
          <FormattedMessage id={`${path}validateDescription3rd`} />{' '}
          <Link to="/api/unit-types/form/$errors-inline" className="Link">
            $errorsInline
          </Link>{' '}
          <FormattedMessage id={`${path}validateDescription4th`} />{' '}
          <Link to="/api/unit-types/form/$form" className="Link">
            $form
          </Link>
          . <FormattedMessage id={`${path}validateDescription5th`} />.{' '}
          <Spoiler
            label={<FormattedMessage id="components.all.showTypes" />}
            secondLabel={<FormattedMessage id="components.all.hideTypes" />}
          >
            <CodeHighlighter code={validateTypes} className="CodeHighlighter" />
          </Spoiler>
          <Spoiler
            label={<FormattedMessage id="components.all.showExample" />}
            secondLabel={<FormattedMessage id="components.all.hideExample" />}
          >
            <CodeHighlighter code={validateExample} className="CodeHighlighter" />
          </Spoiler>
        </li>
        <li>
          <span className="ListItemName">mapSubmit</span>: <FormattedMessage id={`${path}mapSubmitDescription`} />.{' '}
          <Spoiler
            label={<FormattedMessage id="components.all.showTypes" />}
            secondLabel={<FormattedMessage id="components.all.hideTypes" />}
          >
            <CodeHighlighter code={mapSubmitTypes} className="CodeHighlighter" />
          </Spoiler>
          <Spoiler
            label={<FormattedMessage id="components.all.showExample" />}
            secondLabel={<FormattedMessage id="components.all.hideExample" />}
          >
            <CodeHighlighter code={mapSubmitExample} className="CodeHighlighter" />
          </Spoiler>
        </li>
        <li>
          <span className="ListItemName">onSubmit</span>: <FormattedMessage id={`${path}onSubmitDescription1st`} />{' '}
          <Link to="/api/unit-types/form/submit" className="Link">
            submit
          </Link>{' '}
          <FormattedMessage id={`${path}onSubmitDescription2nd`} />{' '}
          <Link to="/api/unit-types/form/$meta" className="Link">
            meta
          </Link>
          .{' '}
          <Spoiler
            label={<FormattedMessage id="components.all.showTypes" />}
            secondLabel={<FormattedMessage id="components.all.hideTypes" />}
          >
            <CodeHighlighter code={onSubmitTypes} className="CodeHighlighter" />
          </Spoiler>
          <Spoiler
            label={<FormattedMessage id="components.all.showExample" />}
            secondLabel={<FormattedMessage id="components.all.hideExample" />}
          >
            <CodeHighlighter code={onSubmitExample} className="CodeHighlighter" />
          </Spoiler>
        </li>
        <li>
          <span className="ListItemName">onSubmitGuardFn</span>:{' '}
          <FormattedMessage id={`${path}onSubmitGuardDescription`} />{' '}
          <Link to="/api/unit-types/form/$meta" className="Link">
            meta
          </Link>
          .{' '}
          <Spoiler
            label={<FormattedMessage id="components.all.showTypes" />}
            secondLabel={<FormattedMessage id="components.all.hideTypes" />}
          >
            <CodeHighlighter code={onSubmitGuardsTypes} className="CodeHighlighter" />
          </Spoiler>
          <Spoiler
            label={<FormattedMessage id="components.all.showExample" />}
            secondLabel={<FormattedMessage id="components.all.hideExample" />}
          >
            <CodeHighlighter code={onSubmitGuardExample} className="CodeHighlighter" />
          </Spoiler>
        </li>
        <li>
          <span className="ListItemName">onChange</span>: <FormattedMessage id={`${path}onChangeDescription`} />{' '}
          <Link to="/api/unit-types/form/$meta" className="Link">
            meta
          </Link>
          .{' '}
          <Spoiler
            label={<FormattedMessage id="components.all.showTypes" />}
            secondLabel={<FormattedMessage id="components.all.hideTypes" />}
          >
            <CodeHighlighter code={onChangeTypes} className="CodeHighlighter" />
          </Spoiler>
          <Spoiler
            label={<FormattedMessage id="components.all.showExample" />}
            secondLabel={<FormattedMessage id="components.all.hideExample" />}
          >
            <CodeHighlighter code={onChangeExample} className="CodeHighlighter" />
          </Spoiler>
        </li>
        <li>
          <span className="ListItemName">onChangeGuardFn</span>:{' '}
          <FormattedMessage id={`${path}onChangeGuardFnDescription`} />{' '}
          <Link to="/api/unit-types/form/$meta" className="Link">
            meta
          </Link>
          .{' '}
          <Spoiler
            label={<FormattedMessage id="components.all.showTypes" />}
            secondLabel={<FormattedMessage id="components.all.hideTypes" />}
          >
            <CodeHighlighter code={onChangeGuardsTypes} className="CodeHighlighter" />
          </Spoiler>
          <Spoiler
            label={<FormattedMessage id="components.all.showExample" />}
            secondLabel={<FormattedMessage id="components.all.hideExample" />}
          >
            <CodeHighlighter code={onChangeGuardExample} className="CodeHighlighter" />
          </Spoiler>
        </li>
        <li>
          <span className="ListItemName">initialValues</span>:{' '}
          <FormattedMessage id={`${path}initialValuesDescription`} />.
        </li>
        <li>
          <span className="ListItemName">initialMeta</span>:{' '}
          <FormattedMessage id={`${path}initialMetaDescription1st`} />{' '}
          <Link to="/api/unit-types/form/$meta" className="Link">
            meta
          </Link>
          <FormattedMessage id={`${path}initialMetaDescription2nd`} />
        </li>
        <li>
          <span className="ListItemName">domain</span>: <FormattedMessage id={`${path}domainDescription`} />.
        </li>
        <li>
          <span className="ListItemName">resetOuterErrorsBySubmit</span>:{' '}
          <FormattedMessage id={`${path}resetOuterErrorsBySubmitDescription`} />
        </li>
        <li>
          <span className="ListItemName">resetOuterErrorByOnChange</span>:{' '}
          <FormattedMessage id={`${path}resetOuterErrorsByOnChangeDescription`} />
        </li>
      </ol>
    </div>
  );
};

export default memo(CreateForm);
