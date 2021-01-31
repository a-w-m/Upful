import React from "react"
import Layout from "../../layout/layout"
import SEO from "../../seo"
import styled from "styled-components"

export const Container = styled.div`
& > * {
    font-family: var(--main-font)
}
`

export interface MarkdownHTMLProps {
  data: {
    file: {
      childMarkdownRemark: {
        html: string
      }
    }
  }
}

const Markdown: React.FC<MarkdownHTMLProps> = ({ data }) => {
  const { html } = data.file.childMarkdownRemark
  return (
    <Layout>
      <SEO/>
      <Container dangerouslySetInnerHTML={{ __html: html }}/>
    </Layout>
  )
}

export default Markdown