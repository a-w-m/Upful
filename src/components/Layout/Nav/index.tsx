import React from "react"
import { Menu, NavLink } from "./styled"
import Logo from "../Logo"
import { graphql, useStaticQuery } from "gatsby"
import { C } from "../../../interfaces"

interface NavProps {
  open: boolean
}

const Nav: React.FC<NavProps> = props => {
  const { open } = props

  const data: C.MenuLinks = useStaticQuery(categoryQuery)

  return (
    <Menu open={open} id = {"menu"} aria-label = "Main">
      <Logo />
      {data.site.siteMetadata.menuLinks.categories.map(category => {
        return (
          <NavLink to={category.slug} key={category.name}>
            {category.name.toUpperCase()}
          </NavLink>
        )
      })}
    </Menu>
  )
}

export const categoryQuery = graphql`
  {
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

export default Nav
