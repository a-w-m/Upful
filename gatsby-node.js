/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({ node, name: "slug", value: slug })
  }
}

exports.createPages = async({graphql, actions}) =>{
    //the graphql function returns a promise

    const {createPage} = actions
    const result = await graphql(`
    query {
        allMarkdownRemark {
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

      result.data.allMarkdownRemark.edges.forEach(({node}) =>{
          createPage({
              path: node.fields.slug,
              component: path.resolve(`src/components/templates/Product/index.tsx`),
              context: {
                  slug: node.fields.slug
              }
          })

      })
}
