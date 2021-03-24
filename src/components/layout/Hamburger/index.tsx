import React, {SetStateAction, Dispatch} from 'react'
import {Container} from "./styled"

interface HamburgerProps {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>

  }

const Hamburger: React.FC<HamburgerProps> = (props)=> {

    const {open, setOpen} = props

    return (

    <Container type = "button" aria-label = "open navigation" aria-controls = "link-list" aria-expanded ="false"  open = {open} onClick = {()=> setOpen(!open)}>
        <div/>
        <div/>
        <div/>
    </Container>
)
    }

export default Hamburger

