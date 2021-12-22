import React, { memo, ReactNode, useState } from 'react';
import cn from 'classnames';
import { FormattedMessage } from 'gatsby-plugin-intl';
import styles from './styles.module.scss';

interface IProps {
  children: ReactNode;
  label?: string | JSX.Element;
  secondLabel?: string | JSX.Element;
}

const Spoiler = ({
  children,
  label = <FormattedMessage id="components.all.showContent" />,
  secondLabel = <FormattedMessage id="components.all.hideContent" />,
}: IProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleSwitch = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <button className={styles.switcher} onClick={handleSwitch}>
        {isVisible ? secondLabel : label}
      </button>
      <div className={cn(styles.childrenWrapper, { [styles.visible]: isVisible })}>{children}</div>
    </>
  );
};

export default memo(Spoiler);
