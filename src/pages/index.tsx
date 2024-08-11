import React, { FC } from 'react';
import { HeadFC, PageProps } from 'gatsby';

import SiteSeo from 'components/seo';

const IndexPage: FC<PageProps> = () => (
  <>
    {/* <Hero /> */}
    <main>
      {/* <Intro />
      <Services />
      <WhyUs />
      <Clients />
      <Testimonials /> */}
    </main>
  </>
);

export default IndexPage;

export const Head: HeadFC = () => <SiteSeo title='YOUR HOME PAGE TITLE' />;
