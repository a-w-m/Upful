import React from "react"
import { FooterContainer, FooterNav, CopyrightWrapper, Address } from "./styled"
import { Link, useStaticQuery, graphql } from "gatsby"
import { C } from "../../../interfaces"

const Footer: React.FC<{}> = () => {
  interface Data {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            title: string
          }
          fields: {
            slug: string
          }
        }
      }[]
    }
    site: C.MenuLinks["site"]
  }

  const footerData: Data = useStaticQuery(footerQuery)

  return (
    <FooterContainer>
      <FooterNav>
        {footerData.site.siteMetadata.menuLinks.categories.map(category => {
          return (
            <Link to={category.slug} key={category.name}>
              {category.name}
            </Link>
          )
        })}
        {footerData.allMarkdownRemark.edges.map(page => {
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

export const footerQuery = graphql`
  {
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
    site {
      siteMetadata {
        menuLinks {
          categories {
            name
            slug
          }
        }
      }
    }
  }
`

export default Footer
