import {Link, FormattedMessage} from 'gatsby-plugin-intl';
import * as React from 'react';
import styles from './styles.module.scss';

interface IProps {
  siteTitle: string;
}

const Header = ({siteTitle}: IProps) => (
  <header className={styles.header}>
    <div className={styles.leftGroup}>
      <Link className={styles.logoLink} to="/">
        {siteTitle}
      </Link>
      {/*<NavItem to="/api">*/}
      {/*  <FormattedMessage id="global.navItemApi" />*/}
      {/*</NavItem>*/}
      <Link className={styles.link} to="/examples/simple-form-local">
        <FormattedMessage id="global.navItemExamples" />
      </Link>
    </div>
  </header>
);

export default Header;
