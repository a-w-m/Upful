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
  }} = useStaticQuery (categoryQuery) 

  console.log(data)
  return (
    <Menu open={open}>
       {data.file.childMarkdownRemark.frontmatter.categories.map(category=>{
         return <Link to={`/${category}/`} key ={category}>{category.toUpperCase()}</Link>
       })}
    </Menu>
  )
}

export const categoryQuery = graphql`
query  {
  file(sourceInstanceName: {eq: "meta"}) {
    childMarkdownRemark {
      frontmatter {
        categories
      }
    }
  }
}`

export default Nav
