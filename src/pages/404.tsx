import React, { FC } from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';

import { Badge } from 'shadcn/badge';
import { Typography } from 'shadcn/typography';
import { Button } from 'shadcn/button';
import { Icon } from 'shadcn/icon';
import SiteSeo from 'components/seo';
import bearImg from 'images/404.webp';

const NotFoundPage: FC<PageProps> = () => (
  <section className='container py-16 grid grid-cols-2 gap-x-20 gap-y-10 lg:grid-cols-none min-h-[90vh] items-center'>
    <div className='lg:order-last'>
      <img src={bearImg} alt='BEAR' className='lg:w-3/4 lg:mx-auto' />
    </div>

    <div className='space-y-4'>
      <Badge variant='outline'>Page not found</Badge>
      <Typography variant='primary'>OOPS! Error 404</Typography>
      <p className='lg:w-2/3'>
        Maybe our pet bear broke this page. Allow us to work on it. Meanwhile, you can safely return
        to the home page.
      </p>
      <Link to='/' className='block'>
        <Button startIcon={<Icon name='Home' />}>Take me home</Button>
      </Link>
    </div>
  </section>
);

export default NotFoundPage;

export const Head: HeadFC = () => <SiteSeo title='Not Found' />;
