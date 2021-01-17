import React from 'react';
import styles from './main-layout.module.scss';
import RightPanel, { Element as NavElement } from '@components/right-panel';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { graphql, useStaticQuery } from 'gatsby';
import Header from '@components/header';
import cn from 'classnames';
type NavElementsKey = 'Getting started' | 'Examples' | 'API';

type NavElementsMap = {
  [key in NavElementsKey]: Array<NavElement>;
};

const getId = (() => {
  let count = 0;
  return () => count++;
})();

const navElementsMap: NavElementsMap = {
  Examples: [
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
  API: [
    {
      id: 0,
      label: 'useForm',
      link: '',
    },
  ],
  'Getting started': [],
};

type Props = {
  menuKey?: NavElementsKey;
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children, menuKey }) => {
  const data = useStaticQuery(graphql`
    query HeadingQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={styles.wrap}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={cn(styles.body)}>
        <main className={styles.main}>
          <div className={styles.wrapContent}>{children}</div>
        </main>
        {menuKey && <RightPanel elements={navElementsMap[menuKey]} />}
      </div>
      {/*<footer className={styles.footer}>*/}
      {/*  © {new Date().getFullYear()}*/}
      {/*</footer>*/}
    </div>
  );
};

export default React.memo(MainLayout);
