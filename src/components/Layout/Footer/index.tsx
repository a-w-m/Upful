import React from "react"
import { FooterContainer, FooterNav, CopyrightWrapper, Address } from "./styled"
import { Link, useStaticQuery, graphql } from "gatsby"
import { categoryQuery } from "../Nav"
import { C } from "../../../interfaces"

const Footer: React.FC<{}> = () => {
  const categoryData: C.MenuLinks = useStaticQuery(categoryQuery)
  const generalPageData = useStaticQuery(generalPagesQuery)

  return (
    <FooterContainer>
      <FooterNav>
        {categoryData.site.siteMetadata.menuLinks.categories.map(category => {
          return (
            <Link to={category.slug} key={category.name}>
              {category.name}
            </Link>
          )
        })}
        {generalPageData.allMarkdownRemark.edges.map((page: any) => {
          return (
            <Link to={page.node.fields.slug} key={page.node.frontmatter.title}>
              {page.node.frontmatter.title.toLowerCase()}
            </Link>
          )
        })}
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

export const generalPagesQuery = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/pages/" } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default Footer
