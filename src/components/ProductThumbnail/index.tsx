import React from 'react'
import {graphql} from 'gatsby'
import {P} from "../interfaces"
import {GatsbyImage} from 'gatsby-plugin-image'
import {Link} from 'gatsby'
import {Article, H3, PriceWrapper, ProductInfoContainer} from "./styled"

interface Props{
    title: string,
    price: number,
    slug: string,
    image: P.Image
}




const ProductThumbnail:React.FC<Props> = (props)=>{
    const {title, price, image, slug} = props
    return (
        <Article>
            <Link to = {slug}>
            <GatsbyImage image = {image.childImageSharp.gatsbyImageData} alt = ""/>
            </Link>
            <ProductInfoContainer>
            <H3>{title}</H3>
            <PriceWrapper>${price.toFixed(2)}</PriceWrapper>
            </ProductInfoContainer>
        </Article>
    )
}

export default ProductThumbnail

export const thumbnailQuery = graphql`
  fragment Thumbnail on MarkdownRemark {
    frontmatter {
      title
      price
      image{
          childImageSharp{
              ...ThumbnailImage
          }
      }
    }
  }

`

export const imageQuery = graphql`
  fragment ThumbnailImage on ImageSharp{
  gatsbyImageData(
    width: 1024
    aspectRatio: 1
    transformOptions: { fit: COVER }
  )
  }
`

