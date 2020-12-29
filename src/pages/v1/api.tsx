import * as React from 'react';
import Layout from '@components/v1/layout';
// import NavPanel, { TElement as NavElement } from '../components/nav-panel';

interface IProps {
}

const Api = React.memo(({}: IProps) => {
  return (
    <Layout>
      api
    </Layout>
  );
});

export default Api;
