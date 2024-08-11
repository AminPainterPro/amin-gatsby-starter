import type { GatsbyConfig } from 'gatsby';
import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const siteUrl = 'https://yourdomainname.tld';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'YOUR TITLE',
    siteUrl,
    description: 'YOUR DESCRIPTION',
    author: 'Mohammed Amin Painter',
    themeColor: 'YOUR HEX COLOR CODE',
  },
  graphqlTypegen: true, // Automatic TypeScript type generation and better GraphQL IntelliSense https://gatsby.dev/graphql-typegen
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-postcss',
    'gatsby-plugin-root-import',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-htaccess', // For deployment on hostinger web hosting
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    // {
    //   resolve: 'gatsby-source-contentful',
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //   },
    // },
    {
      resolve: 'gatsby-transformer-cloudinary',
      options: {
        transformTypes: ['CloudinaryAsset'],
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl,
        stripQueryString: true,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-google-gtag',
    //   options: {
    //     trackingIds: [process.env.GATSBY_GA4_TRACKING_ID],
    //     pluginConfig: { head: true },
    //   },
    // },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*' }],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};

export default config;
