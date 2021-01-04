import React from "react"
import {
  FooterContainer,
  FooterNav,
  ContactWrapper,
  TermsWrapper,
  CopyrightWrapper,
  Heading,
  Address
} from "./footer.styled"
import {Link} from 'gatsby'

const Footer: React.FC<{}> = () => {
  return (
    <FooterContainer>
        <FooterNav>
          <Heading>Categories</Heading>
          <Link to="/">About Us</Link>
          <Link to="/">Clothing</Link>
          <Link to="/">Home</Link>
          <Link to="/">Accessories</Link>
        </FooterNav>
        <ContactWrapper>
            <Heading>Contact</Heading>
            <Address>StoreFront
                <br/>
                 555 Santa Monica Blvd.
                
                <br/>
                Los Angeles, CA 90210
                
            </Address>

            <Address><a href ="mailto:howdy@storefront.com">howdy@storefront.com</a></Address>

        </ContactWrapper>
        <TermsWrapper>
            <Heading>Terms & Conditions</Heading>
            <Link to = "/">Returns</Link>
        </TermsWrapper>
        <CopyrightWrapper>
            © StoreFront {new Date(Date.now()).getFullYear()}
        </CopyrightWrapper>
    </FooterContainer>
  )
}

export default Footer
