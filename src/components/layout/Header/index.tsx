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
} from "./styled"
import { Cart } from "../../Icons/"
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
      <div ref={node}>
        <Hamburger open={open} setOpen={setOpen} />
        <Nav open={open} />
      </div>
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
              src="../../../../assets/icons/upful-gold-frame-logo.png"
              alt="logo"
              placeholder="blurred"
              layout="constrained"
              width={250}
              style={{ borderRadius: "100%" }}
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
