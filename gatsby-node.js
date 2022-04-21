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

  //query markdown nodes by category created by gatsby-source-filesystem
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
    const perPage = 48
    const numPages = Math.ceil(count / perPage) === 0 ? 1 : Math.ceil(count / perPage) 

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
  const { createPage } = actions

  // query menu links from siteMetadata object in gatsby.config
  const categoryData = await graphql(`
    query {
      site {
        siteMetadata {
          menuLinks {
            categories {
              name
              slug
            } 
          }
        }
      }
    }    
  `)
  
  //query slug for each product page
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

  // query slug for each general page node
  const generalPages = await graphql(`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/pages/" } }) {
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

  generalPages.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`src/components/templates/StoreInfo/index.tsx`),
      context: {slug: node.fields.slug}
    })
  })

  

  const promises = categoryData.data.site.siteMetadata.menuLinks.categories.map(
    async ({name}) => {
      await paginate({ graphql, actions, category:name })
    }
  )

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
