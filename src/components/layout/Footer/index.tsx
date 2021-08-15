import React from "react"
import {
  FooterContainer,
  FooterNav,
  ContactWrapper,
  TermsWrapper,
  CopyrightWrapper,
  Heading,
  Address,
} from "./styled"
import { Link } from "gatsby"

const Footer: React.FC<{}> = () => {
  return (
    <FooterContainer>
      <FooterNav>
        <Link to="/clothing/">Clothing</Link>
        <Link to="/home/">Home</Link>
        <Link to="/accessories/">Accessories</Link>
        <Link to="/about/">About Us</Link>
        <Link to="/returns">Returns</Link>
      </FooterNav>
        <Address>
          <a href="mailto:howdy@storefront.com">howdy@storefront.com</a>
        </Address>
      <CopyrightWrapper>
        © Upful {new Date(Date.now()).getFullYear()} Made with full Irations
      </CopyrightWrapper>
    </FooterContainer>
  )
}

export default Footer
