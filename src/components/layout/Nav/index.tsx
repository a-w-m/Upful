import React from "react"
import { Menu } from "./styled"
import { Link, graphql, useStaticQuery } from "gatsby"
import {P} from "../../../interfaces"

interface NavProps {
  open: boolean
}
const Nav: React.FC<NavProps> = props => {
  const { open } = props

  const data: {file: {
    childMarkdownRemark:{
      frontmatter:{
        categories: [string]
      }
    }
  }} = useStaticQuery(graphql`
  query MyQuery {
    file(sourceInstanceName: {eq: "meta"}) {
      childMarkdownRemark {
        frontmatter {
          categories
        }
      }
    }
  }
  `)

  console.log(data)
  return (
    <Menu open={open}>
      {/* <Link to="/about/">About</Link> */}
       {data.file.childMarkdownRemark.frontmatter.categories.map(category=>{
         return <Link to={`/${category}/`}>{category.toUpperCase()}</Link>
       })}
    </Menu>
  )
}

export default Nav
