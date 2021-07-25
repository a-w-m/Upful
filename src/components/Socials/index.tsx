import React from 'react'
import {FacebookIcon, TwitterIcon, InstagramIcon, PinterestIcon} from "../Icons/index"
import { SocialsContainer } from './styled'

const Socials: React.FC<{}> = ()=>{
return(
    <SocialsContainer>
    <FacebookIcon/>
    <TwitterIcon/>
    <InstagramIcon/>
    <PinterestIcon/>
    </SocialsContainer>
)
}

export default Socials