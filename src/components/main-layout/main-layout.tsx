import React from 'react';
import styles from './main-layout.module.scss';
import RightPanel, { Element as NavElement } from '@components/right-panel';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { graphql, useStaticQuery } from 'gatsby';
import Header from '@components/header';
import cn from 'classnames';
type NavElementsKey = 'getting-started' | 'examples' | 'api';

type NavElementsMap = {
  [key in NavElementsKey]: Array<NavElement>;
};

const getId = (() => {
  let count = 0;
  return () => count++;
})();

const navElementsMap: NavElementsMap = {
  'getting-started': [],
  api: [
    {
      id: getId(),
      label: 'Unit creators',
      children: [
        {
          id: getId(),
          label: 'createForm',
          link: '/api/unit-creators/create-form',
        },
        {
          id: getId(),
          label: 'createFieldArray',
          link: '/api/unit-creators/create-field-array',
        },
      ],
    },
    {
      id: getId(),
      label: 'Unit types',
      children: [
        {
          id: getId(),
          label: 'Form',
          link: '/api/unit-types/form/',
          children: [
            {
              id: getId(),
              label: '$values',
              link: '/api/unit-types/form/$values',
            },
            {
              id: getId(),
              label: '$errorsInline',
              link: '/api/unit-types/form/$errors-inline',
            },
            {
              id: getId(),
              label: '$outerErrorsInline',
              link: '/api/unit-types/form/$outer-errors-inline',
            },
            {
              id: getId(),
              label: '$fieldsInline',
              link: '/api/unit-types/form/$fields-inline',
            },
            {
              id: getId(),
              label: '$form',
              link: '/api/unit-types/form/$form',
            },
            {
              id: getId(),
              label: '$meta',
              link: '/api/unit-types/form/$meta',
            },
            {
              id: getId(),
              label: '$allFormState',
              link: '/api/unit-types/form/$all-form-state',
            },
            {
              id: getId(),
              label: 'setValue',
              link: '/api/unit-types/form/set-value',
            },
            {
              id: getId(),
              label: 'setValues',
              link: '/api/unit-types/form/set-values',
            },
            {
              id: getId(),
              label: 'setOrDeleteError',
              link: '/api/unit-types/form/set-or-delete-error',
            },
            {
              id: getId(),
              label: 'setErrorsInlineState',
              link: '/api/unit-types/form/set-errors-inline-state',
            },
            {
              id: getId(),
              label: 'setFieldState',
              link: '/api/unit-types/form/set-field-state',
            },
            {
              id: getId(),
              label: 'setSubmitted',
              link: '/api/unit-types/form/set-submitted',
            },
            {
              id: getId(),
              label: 'resetOuterFieldStateFlags',
              link: '/api/unit-types/form/reset-outer-field-state-flags',
            },
            {
              id: getId(),
              label: 'resetOuterErrors',
              link: '/api/unit-types/form/reset-outer-errors',
            },
            {
              id: getId(),
              label: 'setOrDeleteOuterError',
              link: '/api/unit-types/form/set-or-delete-outer-error',
            },
            {
              id: getId(),
              label: 'setOuterErrorsInlineState',
              link: '/api/unit-types/form/set-outer-errors-inline-state',
            },
            {
              id: getId(),
              label: 'validateForm',
              link: '/api/unit-types/form/validate-form',
            },
            {
              id: getId(),
              label: 'submit',
              link: '/api/unit-types/form/submit',
            },
            {
              id: getId(),
              label: 'reset',
              link: '/api/unit-types/form/reset',
            },
            {
              id: getId(),
              label: 'onSubmit',
              link: '/api/unit-types/form/on-submit',
            },
            {
              id: getId(),
              label: 'setMeta',
              link: '/api/unit-types/form/set-meta',
            },
            {
              id: getId(),
              label: 'onChangeFieldBrowser',
              link: '/api/unit-types/form/on-change-field-browser',
            },
            {
              id: getId(),
              label: 'onFocusFieldBrowser',
              link: '/api/unit-types/form/on-focus-field-browser',
            },
            {
              id: getId(),
              label: 'onBlurFieldBrowser',
              link: '/api/unit-types/form/on-blur-field-browser',
            },
            {
              id: getId(),
              label: 'fieldInit',
              link: '/api/unit-types/form/field-init',
            },
            {
              id: getId(),
              label: 'getName',
              link: '/api/unit-types/form/get-name',
            },
            {
              id: getId(),
              label: 'getNameStr',
              link: '/api/unit-types/form/get-name-str',
            },
            {
              id: getId(),
              label: 'name',
              link: '/api/unit-types/form/name',
            },
          ],
        },
        {
          id: getId(),
          label: 'Field Array',
          children: [
            {
              id: getId(),
              label: 'form',
              link: '/api/unit-types/field-array/form',
            },
            {
              id: getId(),
              label: 'push',
              link: '/api/unit-types/field-array/push',
            },
            {
              id: getId(),
              label: 'remove',
              link: '/api/unit-types/field-array/remove',
            },
          ],
        },
      ],
    },
    {
      id: getId(),
      label: 'Hooks',
      children: [
        {
          id: getId(),
          label: 'useForm',
          link: '/api/hooks/use-form',
        },
        {
          id: getId(),
          label: 'useError',
          link: '/api/hooks/use-error',
        },
        {
          id: getId(),
          label: 'useFieldArray',
          link: '/api/hooks/use-field-array',
        },
      ],
    },
    {
      id: getId(),
      label: 'Utils',
      children: [
        {
          id: getId(),
          label: 'deleteIn',
          link: '/api/utils/delete-in',
        },
        {
          id: getId(),
          label: 'getIn, getInTs',
          link: '/api/utils/get-in-and-get-in-ts',
        },
        {
          id: getId(),
          label: 'setIn',
          link: '/api/utils/set-in',
        },
        {
          id: getId(),
          label: 'makeNested',
          link: '/api/utils/make-nested',
        },
        {
          id: getId(),
          label: 'removeFromInlineMap',
          link: '/api/utils/remove-from-inline-map',
        },
        {
          id: getId(),
          label: 'createNameHelper',
          link: '/api/utils/create-name-helper',
        },
      ],
    },
  ],
  examples: [
    {
      id: getId(),
      label: <FormattedMessage id="examples.simpleForm.title" />,
      link: '/examples/simple-form',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.onchange.title" />,
      link: '/examples/onchange',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.initialValues.title" />,
      link: '/examples/initial-values',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.initialValuesAdvanced.title" />,
      link: '/examples/initial-values-advanced',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.setValues.title" />,
      link: '/examples/set-values',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.setValuesAdvanced.title" />,
      link: '/examples/set-values-advanced',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.fieldLevelValidation.title" />,
      link: '/examples/field-level-validation',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.formLevelValidation.title" />,
      link: '/examples/form-level-validation',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.mixValidation.title" />,
      link: '/examples/mix-validation',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.setError.title" />,
      link: '/examples/set-error',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.serverSideValidation.title" />,
      link: '/examples/server-side-validation',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.virtualized.title" />,
      link: '/examples/virtualized',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.wizard.title" />,
      link: '/examples/wizard',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.fieldArray.title" />,
      link: '/examples/field-array',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.fieldArrayNested.title" />,
      link: '/examples/field-array-nested',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.fieldArrayVirtualized.title" />,
      link: '/examples/field-array-virtualized',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.remoteSubmit.title" />,
      link: '/examples/remote-submit',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.mapSubmit.title" />,
      link: '/examples/map-submit',
    },
  ],
};

type Props = {
  menuKey?: NavElementsKey;
  children: any;
  location?: any;
};

const MainLayout: React.FC<Props> = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query HeadingQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const menuKey = location.pathname
    .split('/')
    .slice(2, 3)
    .join('')
    .toLowerCase();
  const render = menuKey === 'api' || menuKey === 'examples' || menuKey === 'getting-started';
  return (
    <div className={styles.wrap}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={cn(styles.body)}>
        <main className={styles.main}>
          <div className={styles.wrapContent}>{children}</div>
        </main>
        {render && <RightPanel elements={navElementsMap[menuKey]} />}
      </div>
      {/*<footer className={styles.footer}>*/}
      {/*  © {new Date().getFullYear()}*/}
      {/*</footer>*/}
    </div>
  );
};

export default React.memo(MainLayout);
