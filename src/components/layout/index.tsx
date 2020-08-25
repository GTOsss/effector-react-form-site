import * as React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Header from '../header';
import {FormattedMessage} from 'gatsby-plugin-intl';
import cn from 'classnames';
import RightPanel, {Element as NavElement} from '../right-panel';
import styles from './styles.module.scss';

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
      label: <FormattedMessage id="examples.simpleFormLocal.title" />,
      link: '/examples/simple-form-local',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.simpleFormGlobal.title" />,
      link: '/examples/simple-form-global',
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
      label: <FormattedMessage id="examples.setValuesLocal.title" />,
      link: '/examples/set-values-local',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.setValuesGlobal.title" />,
      link: '/examples/set-values-global',
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
      label: <FormattedMessage id="examples.setErrorLocal.title" />,
      link: '/examples/set-error-local',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.setErrorGlobal.title" />,
      link: '/examples/set-error-global',
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

interface IProps {
  children: React.ReactNode;
  menuKey?: NavElementsKey,
}

const Layout = ({
  children,
  menuKey,
}: IProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
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
          <div className={styles.wrapContent}>
            {children}
          </div>
        </main>
        {menuKey && <RightPanel elements={navElementsMap[menuKey]} />}
      </div>
      {/*<footer className={styles.footer}>*/}
      {/*  © {new Date().getFullYear()}*/}
      {/*</footer>*/}
    </div>
  );
};

export default Layout;
