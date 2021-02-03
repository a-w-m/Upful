import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import {graphql} from 'gatsby'
import ProductGrid from '../components/ProductGrid'
import {C} from '../components/interfaces'


const Clothing: React.FC<C.CategoryPage> = ({ data }) => {
  console.log(data)
    return (
      <Layout>
        <SEO />
        <ProductGrid edges = {data.allFile.edges}/> 
      </Layout>
    )
  }

  export const query = graphql`
  {
    allFile(filter: {sourceInstanceName: {eq: "clothing"}, internal: {mediaType: {eq: "text/markdown"}}}) {
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


export default Clothing;