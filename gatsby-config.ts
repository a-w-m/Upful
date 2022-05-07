import { GatsbyConfig } from "gatsby"
import metadata from "./src/markdown/meta/index.json"
import path from "path"

let source = metadata.menuLinks.categories.map(category => {
  return {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: path.resolve(`src/markdown/products${category.slug}`),
      name: category.name,
    },
  }
})

const config: GatsbyConfig = {
  siteMetadata: metadata,
  plugins: [
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },

    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        /**
         * One convention is to place your Netlify CMS customization code in a
         * `src/cms` directory.
         */
        modulePath: path.resolve(`src/cms/index.ts`),
        manualInit: true,
        enableIdentityWidget: true,
        publicPath: "admin",
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`src/images`),
        name: `images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`src/markdown/meta`),
        name: `meta`,
      },
    },

    ...source,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`src/markdown/pages`),
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
        icon: metadata.favicon.replace("/", ""), // set favicon icon, this path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: "3.4.0",
        publicApiKey: process.env.SNIPCART_API_KEY,
        defaultLang: "en",
        currency: "usd",
        openCartOnAdd: true,
        useSideCart: true,
        locales: "en",
        templatesUrl: `/snipcart-templates.html`,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
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

export default config
