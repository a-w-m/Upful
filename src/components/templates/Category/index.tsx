import React from 'react'
import Layout from '../../layout/layout'
import SEO from '../../seo'
import {graphql} from 'gatsby'
import ProductGrid from '../../ProductGrid'
import Pagination from '../../Pagination'
import {C} from '../../interfaces/'


const Category: React.FC<C.CategoryPage> = ({ data, pageContext }) => {
    const{category,numPages, currentPage} = pageContext
    return (
      <Layout>
        <SEO />
        <ProductGrid edges = {data.allFile.edges}>
        {numPages>1 && <Pagination currentPage = {currentPage} numPages ={numPages} category ={category}></Pagination>}
        </ProductGrid>
      </Layout>
    )
  }

  export const query = graphql`
  query($skip: Int! = 0, $category: String!, $limit: Int!){
    allFile(
        filter: {sourceInstanceName: {eq: $category}, internal: {mediaType: {eq: "text/markdown"}}}
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


export default Category;