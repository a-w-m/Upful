const {template} = require("./src/snipcart/templates.tsx")
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
        path: `${__dirname}/src/markdown/products/accessories`,
        name: `accessories`
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown/products/home`,
        name: `home`
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown/products/clothing`,
        name: `clothing`
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown/pages`,
        name: `pages`
      },
    },

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
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
          version: '3.0.28',
          publicApiKey: process.env.SNIPCART_API_KEY,
          defaultLang: 'en',
          currency: 'usd',
          openCartOnAdd: true,
          locales: "en",
          innerHTML: `${template}`
      },
  },


    "gatsby-transformer-remark",
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Quicksand\:400, 700`,
        ],
        display: 'block'
      }
    },
  ],
}
