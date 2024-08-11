import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          siteUrl
          title
          themeColor
        }
      }
    }
  `);

  return siteMetadata;
};

export default useSiteMetadata;
