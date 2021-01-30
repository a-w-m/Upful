import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import {graphql} from 'gatsby'
import ProductGrid from '../components/ProductGrid'
import {P} from '../components/interfaces'


const Home: React.FC<P.Index> = ({ data }) => {
    return (
      <Layout>
        <SEO />
        <ProductGrid edges = {data.allMarkdownRemark.edges}/> 
      </Layout>
    )
  }

  export const query = graphql`
  {
    allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/home/"}})  {
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


export default Home;