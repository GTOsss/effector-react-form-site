import * as React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import Layout from '@components/v1/layout';
import SEO from '@components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      <FormattedMessage id="index.h1" values={{ br: <br /> }} />
    </h1>
  </Layout>
);

export default IndexPage;
