import React, { FC } from 'react';
import { Script } from 'gatsby';

import { useSiteMetadata } from 'hooks';

type SiteSeoProps = {
  title: string;
  schemaMarkup?: object;
};

const SiteSeo: FC<SiteSeoProps> = ({ title, schemaMarkup }) => {
  const siteMetadata = useSiteMetadata();

  return (
    <>
      <title>
        {title} | {siteMetadata.title}
      </title>

      <link rel='shortcut icon' href='/favicon.ico' />

      <meta name='description' content={siteMetadata.description} />
      <meta name='author' content={siteMetadata.author} />
      <meta name='theme-color' content={siteMetadata.themeColor} />

      <meta name='og:title' content={`${title} | ${siteMetadata.title}`} />
      <meta name='og:site_name' content={siteMetadata.title} />
      <meta name='og:url' content={siteMetadata.siteUrl} />
      <meta name='og:description' content={siteMetadata.description} />
      <meta name='og:type' content='website' />
      <meta name='og:image' content='/favicon.ico' />

      {schemaMarkup && <Script type='application/ld+json'>{JSON.stringify(schemaMarkup)}</Script>}
    </>
  );
};

export default SiteSeo;
