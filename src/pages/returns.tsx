import React from "react"
import Markdown, {MarkdownHTMLProps} from "../components/templates/Markdown"
import {graphql} from 'gatsby'

const Returns: React.FC<MarkdownHTMLProps> = ({ data }) => {
  return(
    <Markdown data = {data}/>
  )
}
export const query = graphql`
  {
    file(sourceInstanceName: { eq: "pages" } relativePath: { eq: "returns.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`
export default Returns