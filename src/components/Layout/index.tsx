/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"

import { Container, MainWrapper, Main } from "./styled"
import { GlobalStyle } from "./GlobalStyle"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <MainWrapper>
          <Main>{children}</Main>
        </MainWrapper>
        <Footer></Footer>
      </Container>
    </>
  )
}


export default Layout
