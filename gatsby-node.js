const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  //create node slug and new field on node
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({ node, name: "slug", value: slug })
  }
}

async function paginate({ graphql, actions, category }) {
  //page template
  const categoryTemplate = path.resolve(
    "src/components/templates/Category/index.tsx"
  )

  //query markdown nodes in category created by gatsby-source-filesystem
  try {
    const { data } = await graphql(`
  {
      allFile(
        filter: {sourceInstanceName: { eq: "${category}"}, internal: { mediaType: { eq: "text/markdown" }} }
        ) {
        edges {
          node {
            id
          }
          }
        }

      }
      
  `)

    const count = data.allFile.edges.length
    const perPage = 2
    const numPages = Math.ceil(count / perPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      /*
  - For each page use the createPages api to dynamically create that page
  - Send pagination data to component via context
  */
      actions.createPage({
        path: i == 0 ? `/${category}/` : `/${category}/${i + 1}/`,
        component: categoryTemplate,
        context: {
          limit: perPage,
          skip: i * perPage,
          numPages,
          currentPage: i + 1,
          category,
        },
      })
    })
  } catch (err) {
    throw new Error("There was an error")
  }
}

exports.createPages = async ({ graphql, actions }) => {
  //the graphql function returns a promise

  const { createPage } = actions
  const categories = ["accessories", "clothing", "home"]
  const products = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/products/" } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  products.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`src/components/templates/Product/index.tsx`),
      context: {
        slug: node.fields.slug,
        pathRegex: `/${node.fields.slug.replace("/", "")}images/`,
      },
    })
  })

  const promises = categories.map(async category => {
    await paginate({ graphql, actions, category })
  })

  await Promise.all(promises)
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter!
      fields: Field!
    }  

    type Field {
      slug: String!
    }
    type Frontmatter @infer {
      title: String
      price: Float
      id: String
      image: File @fileByRelativePath
      description: String
      date: String
      customField1: CustomField
      customField2: CustomField
      tags: [String]

    }

    type CustomField {
      name: String!
      values: [Values]!
    }

    type Values {
      name: String!
      priceChange: Int!
    }
  `
  createTypes(typeDefs)
}
