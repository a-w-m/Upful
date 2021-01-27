import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import ProductThumbnail from "../components/ProductThumbnail"
import styled from 'styled-components'
import { graphql } from "gatsby"
import { P } from "../components/interfaces"


export const Container = styled.div`

	display: grid;
	width: auto;
	grid-auto-rows: auto;
	grid-template-columns: 1fr 1fr;
	grid-gap: 2.1rem;

`

const IndexPage: React.FC<P.Index> = ({ data }) => {

  return (
    <Layout>
      <SEO />
      <Container>
      {data.allMarkdownRemark.edges.map(edge => {
        const { title, price, image } = edge.node.frontmatter
        const { slug } = edge.node.fields

        return (
          <ProductThumbnail
            title={title}
            price={price}
            image={image}
            slug={slug}
          ></ProductThumbnail>
        )
        
      })}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark (filter: {frontmatter: {tags: {in: "featured"}}})  {
      edges {
        node {
          frontmatter {
            customField1 {
              name
              values {
                name
                priceChange
              }
            }
            customField2 {
              name
              values {
                name
                priceChange
              }
            }
            title
            id
            date
            description
            image {
              childImageSharp {
                gatsbyImageData(width: 600)
              }
            }
            tags
            price
            quantity
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
