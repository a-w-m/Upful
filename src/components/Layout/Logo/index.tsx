import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { LogoWrapper, LogoLink } from "./styled"
import { P } from "../../../interfaces"

interface Data {
  file: {
    id: string
    childImageSharp: P.Image["childImageSharp"]
  }
}

const Logo: React.FC<{}> = () => {
  const data: Data = useStaticQuery(graphql`
    {
      file(
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "logo" }
      ) {
        id
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 250)
        }
      }
    }
  `)

  return (
      <LogoLink to="/">
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          alt="logo"
          style={{ borderRadius: "100%" }}
        />
      </LogoLink>  )
}

export default Logo
