import React, { useContext, useEffect, useState } from "react"
import { useInventory, useSetInventory } from "../Provider"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { P } from "../../interfaces"
import {
  Article,
  H3,
  PriceWrapper,
  ProductInfoContainer,
  SoldOut,
} from "./styled"

const ProductThumbnail: React.FC<P.Thumbnail> = props => {
  const { id, title, price, thumbnail, galleryImages, slug } = props
  const { inventory, loading } = useInventory()
  const dispatch = useSetInventory()
  const [isHover, setIsHover] = useState(false)  
  //add product to inventory if missing
  useEffect(() => {
    if (inventory[id] === undefined) {
      dispatch({
        type: "SET_INVENTORY",
        data: { ...inventory, [id]: { stock: 0 } },
      })
    }
  }, [inventory.id])

  return (
    <Article>
      <Link to={slug}>
        <GatsbyImage
          onMouseEnter={() =>
            setIsHover(() => (galleryImages.length > 0 ? true : false))
          }
          onMouseLeave={() => {
            setIsHover(false)
          }}
          image={
            isHover
              ? galleryImages[0].childImageSharp.gatsbyImageData
              : thumbnail.childImageSharp.gatsbyImageData
          }
          alt=""
        />
      </Link>
      {!loading && (
        <ProductInfoContainer>
          <H3>{title}</H3>
          <PriceWrapper stock={inventory[id]?.stock}>
            {price.toFixed(2)}
          </PriceWrapper>
          {inventory[id]?.stock === 0 && <SoldOut>Sold Out</SoldOut>}
        </ProductInfoContainer>
      )}
    </Article>
  )
}

export default ProductThumbnail

export const thumbnailQuery = graphql`
  fragment Thumbnail on MarkdownRemark {
    frontmatter {
      id
      title
      price
      galleryImages {
        childImageSharp {
          ...ThumbnailImage
        }
      }
      thumbnail {
        childImageSharp {
          ...ThumbnailImage
        }
      }
    }
  }
`

export const imageQuery = graphql`
  fragment ThumbnailImage on ImageSharp {
    gatsbyImageData(
      width: 1024
      aspectRatio: 1
      transformOptions: { fit: COVER }
    )
  }
`
