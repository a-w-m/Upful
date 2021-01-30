import React from "react"
import {graphql} from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import { P } from "../interfaces/index"
import { Wrapper, UL, LI } from "./styled"

interface Props {
  images: P.ImageNode[]
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
                  type: "image",
                  payload: image.node.childImageSharp.gatsbyImageData,
                })
              }}
            >
              <GatsbyImage
                image={image.node.childImageSharp.gatsbyImageData}
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
  fragment ImageGalleryFragment on ImageSharp{
  gatsbyImageData(
    width: 1024
    aspectRatio: 1
    transformOptions: { fit: CONTAIN }
    backgroundColor: "white"
  )
  }
`

export default ImageGallery
