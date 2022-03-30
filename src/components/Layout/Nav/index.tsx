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

  console.log(data)
  return (
    <Menu open={open}>
      {data.site.siteMetadata.menuLinks.map(category => {
        return (
          <Link to={category.link} key={category.name}>
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
          link
          name
        }
      }
    }
  }
`

export default Nav
