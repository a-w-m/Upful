import React from "react"
const { useState, useRef, useContext } = React

import Hamburger from "../Hamburger"
import Nav from "../Nav"
import Logo from "../Logo"
import { SnipcartContext } from "gatsby-plugin-snipcart-advanced/context.js"

import {
  HeaderContainer,
  CartContainer,
  Checkout,
  Count,
  HamburgerNavContainer,
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
      <HamburgerNavContainer ref={node} open={open}>
        <Hamburger open={open} setOpen={setOpen} />
        <Nav open={open} />
      </HamburgerNavContainer>
      <Logo />
      <CartContainer>
        <Checkout
          className="snipcart-checkout"
          type="button"
          aria-label="snipcart-checkout"
        >
          <Cart />
        </Checkout>
        <Count>{cartQuantity}</Count>
      </CartContainer>
    </HeaderContainer>
  )
}

export default Header
