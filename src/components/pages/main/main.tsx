import CodeHighlighter from '@components/code-highlighter';
import Spoiler from '@components/spoiler';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import SimpleForm, { SimpleFormCode } from './code-example/simple-form';
import FormComponent, { codeExample } from './code-example/wizard';
import styles from './styles.module.scss';

interface IProps {}

const benefits = [
  {
    title: <FormattedMessage id="index.Light" />,
    description: <FormattedMessage id="index.lightDescription" />,
  },
  {
    title: <FormattedMessage id="index.Fast" />,
    description: <FormattedMessage id="index.fastDescription" />,
  },
  {
    title: <FormattedMessage id="index.Virtualization" />,
    description: <FormattedMessage id="index.virtualizationDescription" />,
  },
  {
    title: <FormattedMessage id="index.TypeSafe" />,
    description: <FormattedMessage id="index.typeSafeDescription" />,
  },
];

const Main = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>Effector React Form</h1>
      <h3>
        <FormattedMessage id="index.slogan" />
      </h3>
      <nav className={styles.buttonsWrapper}>
        <Link to="/examples/simple-form" className={styles.navLink}>
          <button className={styles.navButton}>
            <FormattedMessage id="index.Examples" />
          </button>
        </Link>
        <Link to="/api/unit-creators/create-form" className={styles.navLink}>
          <button className={styles.navButton}>API</button>
        </Link>
      </nav>
      <div className={styles.example}>
        <CodeHighlighter code={SimpleFormCode} className={styles.codeHighlighter} />
        <Spoiler
          label={<FormattedMessage id="index.showResult" />}
          secondLabel={<FormattedMessage id="index.hideResult" />}
        >
          <SimpleForm />
        </Spoiler>
      </div>
      <div className={styles.example}>
        <CodeHighlighter code={codeExample} className={styles.codeHighlighter} />
        <Spoiler
          label={<FormattedMessage id="index.showResult" />}
          secondLabel={<FormattedMessage id="index.hideResult" />}
        >
          <FormComponent />
        </Spoiler>
      </div>
      <div className={styles.description}>
        <FormattedMessage id="index.description1st" />
        <br />
        <br />
        <FormattedMessage id="index.description2nd" />
      </div>
      <div className={styles.benefits}>
        {benefits.map((item) => (
          <div className={styles.benefit}>
            <div className={styles.benefitTitle}>{item.title}</div>
            <div className={styles.benefitDescription}>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Main);
