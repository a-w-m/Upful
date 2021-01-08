import React, { ChangeEvent } from 'react'
import Img from 'gatsby-image'
import {P} from "../interfaces/index"
import {Wrapper, UL, LI} from "./styled"

interface Props{
    images: P.Image['childImageSharp']['fluid'][]
    dispatch: P.Dispatch
}
const ImageGallery:React.FC<Props> =(props)=>{
    const {images, dispatch} = props

    const handleClick = (img: P.Image['childImageSharp']['fluid'])=>{
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
                    <LI key = {index} onClick = {()=>{handleClick(image)}}>
                    <Img fluid = {image} ></Img>
                    </LI>
                )
            
            })}
            </UL>

        </Wrapper>
    )

}

export default ImageGallery