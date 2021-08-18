import React from "react"
import Layout from "../../layout"
import SEO from "../../SEO"
import styled from "styled-components"

export const Container = styled.div`
  & > * {
    font-family: var(--main-font);
  }
`

export interface StoreInfoHTMLProps {
  data: {
    file: {
      childMarkdownRemark: {
        html: string
      }
    }
  }
}

const StoreInfo: React.FC<StoreInfoHTMLProps> = ({ data }) => {
  const { html } = data.file.childMarkdownRemark
  return (
    <Layout>
      <SEO />
      <Container dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default StoreInfo
