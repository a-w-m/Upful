const getFileQuery = () => ({
  file: {
    id: "f1fc4c65-65c9-5962-b6a8-9a265bb2e617",
    childImageSharp: {
      gatsbyImageData: {
        layout: "constrained",
        backgroundColor: "#f8f8f8",
        images: {
          fallback: {
            src: "/static/55955cd5db9ac5b9496eb4fb43c87585/de391/upful-gold-frame-logo.png",
            srcSet:
              "/static/55955cd5db9ac5b9496eb4fb43c87585/6a639/upful-gold-frame-logo.png 63w,\n/static/55955cd5db9ac5b9496eb4fb43c87585/2fd20/upful-gold-frame-logo.png 125w,\n/static/55955cd5db9ac5b9496eb4fb43c87585/de391/upful-gold-frame-logo.png 250w,\n/static/55955cd5db9ac5b9496eb4fb43c87585/82c11/upful-gold-frame-logo.png 500w",
            sizes: "(min-width: 250px) 250px, 100vw",
          },
          sources: [
            {
              srcSet:
                "/static/55955cd5db9ac5b9496eb4fb43c87585/74c72/upful-gold-frame-logo.webp 63w,\n/static/55955cd5db9ac5b9496eb4fb43c87585/d66e1/upful-gold-frame-logo.webp 125w,\n/static/55955cd5db9ac5b9496eb4fb43c87585/e7160/upful-gold-frame-logo.webp 250w,\n/static/55955cd5db9ac5b9496eb4fb43c87585/5f169/upful-gold-frame-logo.webp 500w",
              type: "image/webp",
              sizes: "(min-width: 250px) 250px, 100vw",
            },
          ],
        },
        width: 250,
        height: 250,
      },
    },
  },
})

const getSiteQuery = () => ({
  site: {
    siteMetadata: {
      title: "Upful",
      description: "Hand-crafted and made with Iration",
      email: "contact@upful.shop",
      author: "@aw",
      url: "upful.shop",
      keywords: ["e-commerce"],
      image: "image",
      meta: [
        {
          name: "meta",
          content: "meta",
        },
      ],
      menuLinks: {
        categories: [
          {
            name: "women",
            slug: "/women/",
          },
          {
            name: "kids",
            slug: "/kids/",
          },
        ],
      },
    },
  },
})

const getAllMarkdownRemarkQuery = () => ({
  allMarkdownRemark: {
    edges: [
      {
        node: {
          fields: {
            slug: "/about/",
          },
          frontmatter: {
            title: "About",
          },
        },
      },
      {
        node: {
          fields: {
            slug: "/returns/",
          },
          frontmatter: {
            title: "Returns",
          },
        },
      },
    ],
  },
})

export const getQueryMockData = {
  getAllMarkdownRemarkQuery,
  getFileQuery,
  getSiteQuery,
}
