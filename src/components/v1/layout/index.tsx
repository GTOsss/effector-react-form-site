import * as React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Header from '../../header';
import {FormattedMessage} from 'gatsby-plugin-intl';
import cn from 'classnames';
import RightPanel, {Element as NavElement} from '../../right-panel';
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
      label: <FormattedMessage id="examples.v1.simpleFormLocal.title" />,
      link: '/examples/simple-form-local',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.v1.simpleFormGlobal.title" />,
      link: '/examples/simple-form-global',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.v1.onchange.title" />,
      link: '/examples/onchange',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.v1.initialValues.title" />,
      link: '/examples/initial-values',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.v1.initialValuesAdvanced.title" />,
      link: '/examples/initial-values-advanced',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.v1.setValuesLocal.title" />,
      link: '/examples/set-values-local',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.v1.setValuesGlobal.title" />,
      link: '/examples/set-values-global',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.v1.setValuesAdvanced.title" />,
      link: '/examples/set-values-advanced',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.v1.fieldLevelValidation.title" />,
      link: '/examples/field-level-validation',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.v1.formLevelValidation.title" />,
      link: '/examples/form-level-validation',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.v1.mixValidation.title" />,
      link: '/examples/mix-validation',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.v1.setErrorLocal.title" />,
      link: '/examples/set-error-local',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.v1.setErrorGlobal.title" />,
      link: '/examples/set-error-global',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.v1.serverSideValidation.title" />,
      link: '/examples/server-side-validation',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.v1.virtualized.title" />,
      link: '/examples/virtualized',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.v1.wizard.title" />,
      link: '/examples/wizard',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.v1.fieldArray.title" />,
      link: '/examples/field-array',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.v1.fieldArrayNested.title" />,
      link: '/examples/field-array-nested',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.v1.fieldArrayVirtualized.title" />,
      link: '/examples/field-array-virtualized',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.v1.remoteSubmit.title" />,
      link: '/examples/remote-submit',
    },
    {
      id: getId(),
      label: <FormattedMessage id="examples.v1.mapSubmit.title" />,
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
