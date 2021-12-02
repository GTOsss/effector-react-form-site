import cn from 'classnames';
import { changeLocale, IntlContextConsumer } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const LanguageSwitcher = ({}: IProps) => {
  console.log(location);
  return (
    <div className={styles.root}>
      <div>{}</div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => (
          <div className={styles.dropdownWrapper}>
            <div>{currentLocale}</div>
            <div className={styles.dropdown}>
              {languages.map((language) => (
                <a
                  key={language}
                  onClick={() => changeLocale(language)}
                  className={cn(styles.dropdownItem, { [styles.active]: language === currentLocale })}
                >
                  {language}
                </a>
              ))}
            </div>
          </div>
        )}
      </IntlContextConsumer>
    </div>
  );
};

export default memo(LanguageSwitcher);
