import React from 'react'
import {P} from "../interfaces"
import {GatsbyImage} from 'gatsby-plugin-image'
import {Link} from 'gatsby'
import {Article, H3, PriceWrapper} from "./styled"

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
            <H3>{title}</H3>
            </Link>
            <PriceWrapper>{price}</PriceWrapper>
        </Article>
    )
}

export default ProductThumbnail