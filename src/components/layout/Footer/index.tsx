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
        <Heading>Categories</Heading>
        <Link to="/about/">About Us</Link>
        <Link to="/clothing/">Clothing</Link>
        <Link to="/home/">Home</Link>
        <Link to="/accessories/">Accessories</Link>
      </FooterNav>
      <ContactWrapper>
        <Heading>Contact</Heading>
        <Address>
          StoreFront
          <br />
          555 Santa Monica Blvd.
          <br />
          Los Angeles, CA 90210
        </Address>

        <Address>
          <a href="mailto:howdy@storefront.com">howdy@storefront.com</a>
        </Address>
      </ContactWrapper>
      <TermsWrapper>
        <Heading>Terms & Conditions</Heading>
        <Link to="/returns">Returns</Link>
      </TermsWrapper>
      <CopyrightWrapper>
        © StoreFront {new Date(Date.now()).getFullYear()}
      </CopyrightWrapper>
    </FooterContainer>
  )
}

export default Footer
