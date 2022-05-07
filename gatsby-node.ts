import { Actions, CreatePagesArgs, GatsbyNode } from "gatsby"
import path from "path"
import { createFilePath } from "gatsby-source-filesystem"

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  getNode,
  actions,
}) => {
  //create node slug and new field on node
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({ node, name: "slug", value: slug })
  }
}

const paginate = async ({
  graphql,
  actions,
  category,
}: {
  graphql: CreatePagesArgs["graphql"]
  actions: Actions
  category: string
}) => {
  type DATA = {
    errors?: any
    data?: {
      allFile: {
        edges: [{ id: string }]
      }
    }
  }

  //page template
  const categoryTemplate = path.resolve(
    "src/components/templates/Category/index.tsx"
  )

  //query markdown nodes by category created by gatsby-source-filesystem

  const res: DATA = await graphql(`
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

  const perPage = 48
  const count = res.data?.allFile.edges.length
  if (count) {
    const numPages =
      Math.ceil(count / perPage) === 0 ? 1 : Math.ceil(count / perPage)

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
  }
}

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions

  //declare types
  type CategoryData = {
    errors?: any
    data?: {
      site: {
        siteMetadata: {
          menuLinks: {
            categories: Array<{ name: string; slug: string }>
          }
        }
      }
    }
  }

  type Products = {
    errors?: any
    data?: {
      allMarkdownRemark: {
        edges: Array<{ node: { fields: { slug: string } } }>
      }
    }
  }

  type GeneralPages = {
    errors?: any
    data?: {
      allMarkdownRemark: {
        edges: Array<{ node: { fields: { slug: string } } }>
      }
    }
  }

  // query menu links from siteMetadata object in gatsby.config
  const categoryData: CategoryData = await graphql(`
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
  const products: Products = await graphql(`
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
  const generalPages: GeneralPages = await graphql(`
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

  products.data?.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`src/components/templates/Product/index.tsx`),
      context: {
        slug: node.fields.slug,
        pathRegex: `/${node.fields.slug.replace("/", "")}images/`,
      },
    })
  })

  generalPages.data?.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`src/components/templates/StoreInfo/index.tsx`),
      context: { slug: node.fields.slug },
    })
  })

  const promises =
    categoryData.data?.site.siteMetadata.menuLinks.categories.map(
      async ({ name }) => {
        await paginate({ graphql, actions, category: name })
      }
    )
  if (promises) {
    await Promise.all(promises)
  }
}
