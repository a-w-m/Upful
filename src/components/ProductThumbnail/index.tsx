import React, {useContext} from "react"
import {Context} from "../Provider"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { P } from "../interfaces"
import { Article, H3, PriceWrapper, ProductInfoContainer, SoldOut } from "./styled"



const ProductThumbnail: React.FC<P.Thumbnail> = props => {
  const { id, title, price, image, slug } = props
  const {inventory, isLoading} = useContext(Context)
  return (
    <Article>
      <Link to={slug}>
        <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt="" />
      </Link>
      {!isLoading && <ProductInfoContainer>
        <H3>{title}</H3>
        <PriceWrapper>{price.toFixed(2)}</PriceWrapper>
        {(inventory[id]?.stock <=0) &&<SoldOut>Sold Out </SoldOut> }
      </ProductInfoContainer>}
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
      image {
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
