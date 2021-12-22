import { Element } from '@components/right-panel';
import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {
  data: Element;
  key: number | string;
  level: number;
}

const NavElement = ({ data, level }: IProps) => {
  const { label, link = null, children = null } = data;
  return (
    <div className={styles.root}>
      {link ? (
        <Link
          className={styles.link}
          activeClassName={styles.activeLink}
          to={link}
          style={{ paddingLeft: `${30 + 25 * level}px` }}
        >
          {label}
        </Link>
      ) : (
        <div className={styles.link}>{label}</div>
      )}
      {children && children.map((item) => <NavElement data={item} key={item.id} level={level + 1} />)}
    </div>
  );
};

export default memo(NavElement);
