import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { P } from "../../interfaces/index"
import { Wrapper, UL, LI } from "./styled"

interface Props {
  galleryImages: P.Image[]
  dispatch: P.Dispatch
  selected: P.State['imageSelected']
}
const ImageGallery: React.FC<Props> = props => {
  const { galleryImages, dispatch, selected } = props

  return (
    <Wrapper>
        <GatsbyImage
          image={selected}
          alt=""
        />
      <UL>
        {galleryImages.map((image, index) => {
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
      height: 1024
    )
  }
`

export default ImageGallery
