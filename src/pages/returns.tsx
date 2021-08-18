import React from "react"
import StoreInfo, { StoreInfoHTMLProps } from "../components/templates/StoreInfo"
import { graphql } from "gatsby"

const Returns: React.FC<StoreInfoHTMLProps> = ({ data }) => {
  return <StoreInfo data={data} />
}
export const query = graphql`
  {
    file(
      sourceInstanceName: { eq: "pages" }
      relativePath: { eq: "returns.md" }
    ) {
      childMarkdownRemark {
        html
      }
    }
  }
`
export default Returns
