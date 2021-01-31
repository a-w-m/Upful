const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({ node, name: "slug", value: slug })
  }
}

async function paginate(graphql, actions) {
  const categoryTemplate = path.resolve(
    "src/components/templates/Category/index.tsx"
  )
  const { errors, data } = await graphql(`
  {
      allFile(
        filter: {sourceInstanceName: { eq: "accessories" }, internal: { mediaType: { eq: "text/markdown" }} }
        ) {
        edges {
          node {
            id
          }
          }
        }

      }
      
  `)

const count = data.allFile.edges.length;
const perPage = 2;
const numPages = Math.ceil(count/perPage)

Array.from({length: numPages}).forEach((_, i) =>{
  //for each page use the createPages aapi to dynamically create that page
  actions.createPage({
    path: i == 0 ? `/accessories/`: `/accessories/${i + 1}/`,
    component: categoryTemplate,
    context:{
      limit: perPage,
      skip: i * perPage,
      numPages,
      currentPage: i + 1,
      collection: "accessories"
    }
  })
})


if (errors){
  throw new Error('There was an error')
  }

}

exports.createPages = async ({ graphql, actions }) => {
  //the graphql function returns a promise

  const { createPage } = actions
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

  paginate(graphql, actions)
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
