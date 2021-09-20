import React from "react"
import { FooterContainer, FooterNav, CopyrightWrapper, Address } from "./styled"
import { Link, useStaticQuery } from "gatsby"
import { categoryQuery } from "../Nav"

const Footer: React.FC<{}> = () => {
  const data: {
    file: {
      childMarkdownRemark: {
        frontmatter: {
          categories: [string]
        }
      }
    }
  } = useStaticQuery(categoryQuery)

  return (
    <FooterContainer>
      <FooterNav>
        {data.file.childMarkdownRemark.frontmatter.categories.map(category => {
          return <Link to={`/${category}/`} key ={category}>{category}</Link>
        })}
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
