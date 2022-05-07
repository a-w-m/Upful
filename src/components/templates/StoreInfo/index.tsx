import React from "react"
import { graphql } from "gatsby"
import Layout from "../../Layout"
import Seo from "../../Seo"
import { Container, CategoryHeading, Wrapper } from "./styled"

export interface StoreInfoHTMLProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
      }
      html: string
    }
  }
}

const StoreInfo: React.FC<StoreInfoHTMLProps> = ({ data }) => {
  const { html } = data.markdownRemark
  const { title } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <Seo />
      <Container>
        <CategoryHeading>{title}</CategoryHeading>
        <Wrapper dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default StoreInfo
