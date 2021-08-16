import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { P } from "../interfaces/index"
import { Wrapper, UL, LI } from "./styled"

interface Props {
  images: P.Image[]
  dispatch: P.Dispatch
}
const ImageGallery: React.FC<Props> = props => {
  const { images, dispatch } = props

  if (images.length <= 1) {
    return null
  }

  return (
    <Wrapper>
      <UL>
        {images.map((image, index) => {
          return (
            <LI
              key={index}
              onClick={() => {
                dispatch({
                  type: "SET_IMAGE",
                  payload: image.childImageSharp.gatsbyImageData,
                })
              }}
            >
              <GatsbyImage
                image={image.childImageSharp.gatsbyImageData}
                alt=""
                style={{ opacity: 1 }}
                loading={"eager"}
              ></GatsbyImage>
            </LI>
          )
        })}
      </UL>
    </Wrapper>
  )
}

export const imageQuery = graphql`
  fragment ImageGalleryFragment on ImageSharp {
    gatsbyImageData(
      layout: CONSTRAINED
      transformOptions: { fit: COVER }
      backgroundColor: "white"
    )
  }
`

export default ImageGallery
