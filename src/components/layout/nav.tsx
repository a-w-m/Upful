import React from 'react'
import {Menu} from "./nav.styled"
import {Link} from 'gatsby'

interface NavProps{
    open: boolean
}
const Nav:React.FC<NavProps> = (props)=>{

    const {open} = props
    return(
        <Menu open = {open}>
            <Link to ="/">About Us</Link>
            <Link to ="/clothing/">Clothing</Link>
            <Link to ="/home/">Home</Link>
            <Link to ="/accessories/">Accessories</Link>
        </Menu>
    )
}

export default Nav