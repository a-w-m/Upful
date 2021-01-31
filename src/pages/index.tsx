import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ProductGrid from "../components/ProductGrid"
import { graphql } from "gatsby"
import { C, P } from "../components/interfaces"

const IndexPage: React.FC<C.CategoryPage> = ({ data }) => {
  return (
    <Layout>
      <SEO />
      <ProductGrid edges = {data.allFile.edges}/> 
    </Layout>
  )
}


export const query = graphql`
{
  allFile(filter: {childMarkdownRemark: {frontmatter: {tags: {in: "featured"}}}}) {
    edges {
      node {
        childMarkdownRemark{
        ...Thumbnail
        fields{
          
          slug
        }
        }
        
      }
    }
  }
}
`

export default IndexPage
