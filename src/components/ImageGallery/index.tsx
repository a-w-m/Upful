import React, { ChangeEvent } from 'react'
import {GatsbyImage} from 'gatsby-plugin-image'
import {P} from "../interfaces/index"
import {Wrapper, UL, LI} from "./styled"

interface Props{
    images: P.ImageNode[]  
    dispatch: P.Dispatch
}
const ImageGallery:React.FC<Props> =(props)=>{
    const {images, dispatch} = props

    const handleClick = (img: P.Image['childImageSharp']['gatsbyImageData'])=>{
        dispatch({type: "image", payload: img})
    }

if (images.length <= 1){
    return null
}

    return (
        <Wrapper>
            <UL>
            {images.map((image, index)=>{
                return (
                    <LI key = {index} onClick = {()=>{handleClick(image.node.childImageSharp.gatsbyImageData)}}>
                    <GatsbyImage image = {image.node.childImageSharp.gatsbyImageData} alt = "" ></GatsbyImage>
                    </LI>
                )
            
            })}
            </UL>

        </Wrapper>
    )

}

export default ImageGallery