import PropTypes from 'prop-types'
import React from 'react'
const {useState, useRef} = React

import Hamburger from "../Hamburger"
import Nav from "../Nav"
import {
  HeaderContainer,
  LinkWrapper,
  TitleWrapper,
  TitleLink,
} from "./styled"
import useOnClickOutside from "../../../hooks/useOnClickOutside"

interface HeaderProps {
  siteTitle: String
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {

  const node = useRef(null)
  const [open, setOpen] = useState(false)
  useOnClickOutside(node, ()=> setOpen(false))

  return(

  <HeaderContainer>
    <div ref ={node}>
    <Hamburger open = {open} setOpen = {setOpen} />
    <Nav open = {open}/>
    </div>
    <TitleWrapper>
      <LinkWrapper>
        <TitleLink to="/">{siteTitle}</TitleLink>
      </LinkWrapper>
    </TitleWrapper>
  </HeaderContainer>
  )}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
