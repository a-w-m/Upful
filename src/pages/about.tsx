import React from "react"
import StoreInfo, { StoreInfoHTMLProps} from "../components/templates/StoreInfo"
import { graphql } from "gatsby"

const About: React.FC<StoreInfoHTMLProps> = ({ data }) => {
  return <StoreInfo data={data} />
}
export const query = graphql`
  {
    file(
      sourceInstanceName: { eq: "pages" }
      relativeDirectory: { eq: "about" }
    ) {
      childMarkdownRemark {
        html
      }
    }
  }
`
export default About
