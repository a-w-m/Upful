import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import {graphql} from 'gatsby'
import ProductGrid from '../components/ProductGrid'
import {C} from '../components/interfaces'


const Accessories: React.FC<C.CategoryPage> = ({ data }) => {
    return (
      <Layout>
        <SEO />
        <ProductGrid edges = {data.allFile.edges}/> 
      </Layout>
    )
  }

  export const query = graphql`
  query($limit: Int!, $skip: Int! = 0){
    allFile(filter: {sourceInstanceName: {eq: "accessories"}, internal: {mediaType: {eq: "text/markdown"}}} limit: $limit skip: $skip) {
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


export default Accessories;