import React from "react"
import Layout from "../components/layout"
import SEO from "../components/SEO"
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
