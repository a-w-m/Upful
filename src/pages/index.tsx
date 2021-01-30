import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ProductGrid from "../components/ProductGrid"
import { graphql } from "gatsby"
import { P } from "../components/interfaces"

const IndexPage: React.FC<P.Index> = ({ data }) => {
  return (
    <Layout>
      <SEO />
      <ProductGrid edges = {data.allMarkdownRemark.edges}/> 
    </Layout>
  )
}


export const query = graphql`
  {
    allMarkdownRemark (filter: {frontmatter: {tags: {in: "featured"}}})  {
      edges {
        node {
            ...Thumbnail
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
