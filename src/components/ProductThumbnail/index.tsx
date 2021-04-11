import React, {useContext, useMemo} from "react"
import { graphql } from "gatsby"
import { P } from "../interfaces"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Article, H3, PriceWrapper, ProductInfoContainer } from "./styled"
import {Context} from "../Provider"
import { getStock } from "../../helpers/index"


const ProductThumbnail: React.FC<P.Thumbnail> = props => {
  const { id, title, price, image, slug } = props
  const {stockArray, isLoading} = useContext(Context)
  const stock = useMemo(()=>{
    return getStock(stockArray, id )
  }, [stockArray])

//get id, import helpervv
  return (
    <Article>
      <Link to={slug}>
        <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt="" />
      </Link>
      <ProductInfoContainer>
        <H3>{title}</H3>
        <PriceWrapper>{stock >  0 ? price.toFixed(2) : "Sold Out" }</PriceWrapper>
      </ProductInfoContainer>
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
