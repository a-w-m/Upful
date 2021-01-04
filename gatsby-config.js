module.exports = {
  siteMetadata: {
    title: `StoreFront`,
    description: `Knick Knacks`,
    author: `@a-w-m`,
    url: "http://localhost",
    keywords: ["e-commerce"],
    meta: [{ name: "meta", content: "meta" }],
    image: "image",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown/products`,
        name: `products`
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `storefront`,
        short_name: `storefront`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        apiKey:
          "ZWY0M2E5YjQtMGZkNi00MDc5LWI1OTMtN2RhNmExNWQ3ODJlNjM3NDQ4NTE1OTE0MDAwMTAz",
        autopop: true,
      },
    },

    "gatsby-transformer-remark",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
