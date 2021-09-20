import PropTypes from "prop-types"
import React from "react"
const { useState, useRef, useContext } = React

import Hamburger from "../Hamburger"
import Nav from "../Nav"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import { SnipcartContext } from "gatsby-plugin-snipcart-advanced/context.js"

import {
  HeaderContainer,
  LogoContainer,
  LogoWrapper,
  CartContainer,
  Checkout,
  Count,
  HamburgerNavContainer
  
} from "./styled"
import { Cart } from "../../Icons"
import useOnClickOutside from "../../../hooks/useOnClickOutside"

interface HeaderProps {
  siteTitle: String
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  const node = useRef(null)
  const [open, setOpen] = useState(false)
  useOnClickOutside(node, () => setOpen(false))
  const { state } = useContext(SnipcartContext)
  const { cartQuantity } = state

  return (
    <HeaderContainer>
      <HamburgerNavContainer ref={node} open ={open}>
        <Hamburger open={open} setOpen={setOpen} />
        <Nav open={open} />
      </HamburgerNavContainer>
      <CartContainer>
        <Checkout className="snipcart-checkout">
          <Cart />
        </Checkout>
        <Count>{cartQuantity}</Count>
      </CartContainer>
      <LogoContainer>
        <LogoWrapper>
          <Link to="/">
            <StaticImage
              src="../../../images/upful-gold-frame-logo.png"
              alt="logo"
              style={{ borderRadius: "100%" }}
              width={250}
            />
          </Link>
        </LogoWrapper>
      </LogoContainer>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
