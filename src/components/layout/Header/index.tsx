import PropTypes from "prop-types"
import React from "react"
const { useState, useRef, useContext } = React

import Hamburger from "../Hamburger"
import Nav from "../Nav"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"


import { GatsbyImage } from "gatsby-plugin-image"
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

  const data = useStaticQuery(graphql`{
   allFile(
      filter: {sourceInstanceName: {eq: "images"}, relativePath: {regex: "/Upfull/"}}
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 250, placeholder: BLURRED)
          }
        }
      }
    }
  }`)

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
            <GatsbyImage
              image = {data.allFile.edges[0].node.childImageSharp.gatsbyImageData}
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
