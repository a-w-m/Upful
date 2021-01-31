import React from "react"
import Markdown, {MarkdownHTMLProps} from "../components/templates/Markdown"
import {graphql} from 'gatsby'

const About: React.FC<MarkdownHTMLProps> = ({ data }) => {
  return(
    <Markdown data = {data}/>
  )
}
export const query = graphql`
  {
    file(sourceInstanceName: { eq: "pages" } relativePath: { eq: "about.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`
export default About
