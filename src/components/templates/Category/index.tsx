import React from 'react'
import Layout from '../../layout/layout'
import SEO from '../../seo'
import {graphql} from 'gatsby'
import ProductGrid from '../../ProductGrid'
import {C} from '../../interfaces/'


const Category: React.FC<C.CategoryPage> = ({ data }) => {
    return (
      <Layout>
        <SEO />
        <ProductGrid edges = {data.allFile.edges}/> 
      </Layout>
    )
  }

  export const query = graphql`
  query($skip: Int! = 0, $collection: String!, $limit: Int!){
    allFile(
        filter: {sourceInstanceName: {eq: $collection}, internal: {mediaType: {eq: "text/markdown"}}}
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