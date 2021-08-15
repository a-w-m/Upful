import React from 'react'
import {Wrapper} from "./styled"
import {Link} from 'gatsby'
import {ChevronRight} from "../Icons/index"

interface Props{
    collection: string
    title: string
}

const ProductNav: React.FC<Props> = (props)=>{

    const {collection, title} = props
return(
    <Wrapper>
        <Link to = {"/index"}>
            HOME
        </Link>
        <ChevronRight></ChevronRight>
        <Link to ={`/${collection}`}>
            {collection}
        </Link>
        <ChevronRight></ChevronRight>
        <span>{title}</span>
    </Wrapper>
)
}

export default ProductNav