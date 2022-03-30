import React from "react"
import { FooterContainer, FooterNav, CopyrightWrapper, Address } from "./styled"
import { Link, useStaticQuery } from "gatsby"
import { categoryQuery } from "../Nav"
import {C} from "../../../interfaces"

const Footer: React.FC<{}> = () => {
  const data: C.MenuLinks = useStaticQuery(categoryQuery)

  return (
    <FooterContainer>
      <FooterNav>
        {data.site.siteMetadata.menuLinks.map(category => {
          return <Link to={category.link} key ={category.name}>{category.name}</Link>
        })}
        <Link to="/about/">about</Link>
        <Link to="/returns">returns</Link>
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
