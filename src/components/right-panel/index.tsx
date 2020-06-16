import * as React from 'react';
import {Link} from 'gatsby-plugin-intl'
import styles from './styles.module.scss';

export type Element = {
  id: number | string;
  label: React.ReactNode;
  link: string;
}

interface Props {
  elements: Array<Element>
}

const NavPanel: React.FC<Props> = React.memo(({
  elements,
}) => {

  return (
    <div className={styles.wrap}>
      <ul className={styles.list}>
        {elements.map(({label, link}) => (
          <li>
            <Link className={styles.link} to={link}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default NavPanel;
