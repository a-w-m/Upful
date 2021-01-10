import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import ProductThumbnail from "../components/ProductThumbnail"
import { graphql } from "gatsby"
import { P } from "../components/interfaces"

const IndexPage: React.FC<P.Index> = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <SEO />
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
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
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
            id
            date
            description
            image {
              childImageSharp {
                gatsbyImageData(maxWidth: 400, layout: FLUID)
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
