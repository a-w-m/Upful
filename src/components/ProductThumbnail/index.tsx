import React from 'react'
import {P} from "../interfaces"
import {GatsbyImage} from 'gatsby-plugin-image'
import {Article, H3, PriceWrapper} from "./styled"

interface Props{
    name: string,
    price: number,
    image: P.Image
}



const ProductThumbnail:React.FC<Props> = (props)=>{
    const {name, price, image} = props
    return (
        <Article>
            <GatsbyImage image = {image.childImageSharp.gatsbyImageData} alt = ""/>
            <H3>{name}</H3>
            <PriceWrapper>{price}</PriceWrapper>
        </Article>
    )
}

export default ProductThumbnail