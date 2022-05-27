import React from "react"
import { Wrapper } from "./styled"
import { Link } from "gatsby"
import { ChevronRight } from "../Icons/index"

interface Props {
  collection: string
  title: string
}

const ProductNav: React.FC<Props> = props => {
  const { collection, title } = props
  return (
    <Wrapper aria-label="Product">
      <Link to={"/"}>HOME</Link>
      <ChevronRight title ="" hidden ={true}></ChevronRight>
      <Link to={`/${collection}`}>{collection}</Link>
      <ChevronRight title ="" hidden = {true}></ChevronRight>
      <span>{title}</span>
    </Wrapper>
  )
}

export default ProductNav
