module.exports = {
  siteMetadata: {
    title: `Mobile Phones & Accessories Store`,
    description: `Gatsby site - Sourcing from Contentful CMS for master thesis in Software engineering - KSU`,
    author: `Eng. Dalal Al-Akhras`,
    },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `tkkoipefq1j3`,
        accessToken: `bANMekpQ6kdSLfQFQJ9URZ5mSfsNchcpkhOYLdqp-Yk`,
        host: `preview.contentful.com`,
                
      },
    },

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
