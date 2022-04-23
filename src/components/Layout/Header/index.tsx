import PropTypes from "prop-types"
import React from "react"
const { useState, useRef, useContext } = React

import Hamburger from "../Hamburger"
import Nav from "../Nav"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { SnipcartContext } from "gatsby-plugin-snipcart-advanced/context.js"
import { P } from "../../../interfaces"

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

interface Data {
  file:{
    id: string,
    childImageSharp: P.Image['childImageSharp']
  }
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  const node = useRef(null)
  const [open, setOpen] = useState(false)
  useOnClickOutside(node, () => setOpen(false))
  const { state } = useContext(SnipcartContext)
  const { cartQuantity } = state

  const data: Data = useStaticQuery(graphql`
    {
      file(sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "logo"}) {
        id
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 250)
        }
      }
    }
  `)

  
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
            <GatsbyImage
              image={data.file.childImageSharp.gatsbyImageData}
              alt="logo"
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
