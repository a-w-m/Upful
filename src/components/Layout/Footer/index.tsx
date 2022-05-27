import React from "react"
import {
  FooterContainer,
  FooterNav,
  CopyrightWrapper,
  Address,
  FooterLink,
} from "./styled"
import { useStaticQuery, graphql } from "gatsby"
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
    site:C.FooterLinks["site"]
  }

  const footerData: Data = useStaticQuery(footerQuery)

  return (
    <FooterContainer>
      <FooterNav aria-label = "Footer">
        {footerData.site.siteMetadata.menuLinks.categories.map(category => {
          return (
            <FooterLink to={category.slug} key={category.name}>
              {category.name}
            </FooterLink>
          )
        })}
        {footerData.allMarkdownRemark.edges.map(page => {
          return (
            <FooterLink
              to={page.node.fields.slug}
              key={page.node.frontmatter.title}
            >
              {page.node.frontmatter.title.toLowerCase()}
            </FooterLink>
          )
        })}
      </FooterNav>
      <Address>
        <a href={footerData.site.siteMetadata.email}>{footerData.site.siteMetadata.email}</a>
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
        email
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
