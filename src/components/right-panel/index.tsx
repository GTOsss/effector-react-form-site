import * as React from 'react';
import styles from './styles.module.scss';
import NavElement from '@components/nav-element/nav-element';

export type Element = {
  id: number | string;
  label: React.ReactNode;
  link?: string;
  children?: Element[];
};

interface Props {
  elements: any;
}

const NavPanel: React.FC<Props> = React.memo(({ elements }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <ul className={styles.list}>
          {elements.map((item) => (
            <NavElement data={item} key={item.id} level={0} />
          ))}
        </ul>
      </div>
    </div>
  );
});

export default NavPanel;
