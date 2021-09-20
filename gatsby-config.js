const { template } = require("./src/snipcart/templates.tsx")
module.exports = {
  siteMetadata: {
    title: `Upful`,
    description: "Hand-crafted and made with Iration",
    author: `@a-w-m`,
    url: "",
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
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown/meta`,
        name: `meta`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown/products/kids`,
        name: `kids`,
      },
    },

    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/markdown/products/mommy-and-me`,
    //     name: `mommy and me`,
    //   },
    // },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown/products/men`,
        name: `men`,
      },
    },

    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/markdown/products/home-goods`,
    //     name: `home goods`,
    //   },
    // },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown/products/women`,
        name: `women`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown/pages`,
        name: `pages`,
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
        icon: `src/images/Upfull.jpg`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: "3.0.28",
        publicApiKey: process.env.SNIPCART_API_KEY,
        defaultLang: "en",
        currency: "usd",
        openCartOnAdd: true,
        locales: "en",
        innerHTML: `${template}`,
      },
    },

    "gatsby-transformer-remark",
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,


    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Quicksand\:400, 700`],
        display: "block",
      },
    },
  ],
}
