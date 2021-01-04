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
            <Link to ="/">Clothing</Link>
            <Link to ="/">Home</Link>
            <Link to ="/">Accessories</Link>
        </Menu>
    )
}

export default Nav