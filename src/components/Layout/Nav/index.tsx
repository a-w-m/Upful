import React from "react"
import { Menu } from "./styled"
import { Link, graphql, useStaticQuery } from "gatsby"
import {C} from "../../../interfaces"

interface NavProps {
  open: boolean
}

const Nav: React.FC<NavProps> = props => {
  const { open } = props

  const data: C.MenuLinks = useStaticQuery(categoryQuery)

  return (
    <Menu open={open}>
      {data.site.siteMetadata.menuLinks.categories.map(category => {
        return (
          <Link to={category.slug} key={category.name}>
            {category.name.toUpperCase()}
          </Link>
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
