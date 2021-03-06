/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Color Site`,
    url: `https://colorsite.netlify.com/`,
    description: `Seek out inspiration and integrate color palettes & gradients into your own projects.`,
    name: 'Julian Rivera',
    username: 'Superjuarri',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Color Site`,
        short_name: `Color Site`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/assets/images/goochIcon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: `main`,
        collection: [`gradients`, `palettes`],
        server: {
          address: 'cluster0-shard-00-01-mxgqc.mongodb.net',
          port: 27017,
        },
        auth: { user: 'User', password: 'User' },
        extraParams: {
          replicaSet: 'Cluster0-shard-0',
          ssl: true,
          authSource: `admin`,
          retryWrites: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
