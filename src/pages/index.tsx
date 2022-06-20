import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import ProductGrid from "../components/ProductGrid"
import {
  CategoryHeading,
  Container,
} from "../components/templates/Category/styled"
import { graphql } from "gatsby"
import { C } from "../interfaces"

const IndexPage: React.FC<C.CategoryPage> = ({ data }) => {
  return (
    <Layout>
      <Seo />
      <Container>
        <CategoryHeading>FEATURED GOODS</CategoryHeading>
        <ProductGrid edges={data.allFile.edges} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile(
      filter: {
        childMarkdownRemark: { frontmatter: { featured: { eq: true } } }
      }
      sort: {fields: sourceInstanceName, order: DESC}
    ) {
      edges {
        node {
          childMarkdownRemark {
            ...Thumbnail
            fields {
              slug
            }
          }
        }
      }
    }
  }
`

export default IndexPage
