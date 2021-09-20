import React from "react"
import Layout from "../../Layout"
import Seo from "../../Seo"
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
      <Seo />
      <Container dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default StoreInfo
