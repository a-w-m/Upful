import React from "react"
import Layout from "../../Layout"
import Seo from "../../Seo"
import { graphql } from "gatsby"
import ProductGrid from "../../ProductGrid"
import Pagination from "../../Pagination"
import { CategoryHeading, Container } from "./styled"
import { C } from "../../../interfaces"

const Category: React.FC<C.CategoryPage> = ({ data, pageContext }) => {
  const { category, numPages, currentPage } = pageContext
  return (
    <Layout>
      <Seo />
      <Container>
        <CategoryHeading>{category}</CategoryHeading>
        <ProductGrid edges={data.allFile.edges} />
        {numPages > 1 && (
          <Pagination
            currentPage={currentPage}
            numPages={numPages}
            category={category}
          />
        )}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ($skip: Int! = 0, $category: String!, $limit: Int!) {
    allFile(
      filter: {
        sourceInstanceName: { eq: $category }
        internal: { mediaType: { eq: "text/markdown" } }
      }
      limit: $limit
      skip: $skip
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

export default Category
