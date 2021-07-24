import React from "react"
import { C } from "../interfaces"
import ProductThumbnail from "../ProductThumbnail"
import { Container } from "./styled"

const ProductGrid: React.FC<C.Grid> = props => {
  return (
    <Container>
      {props.edges.map((edge, index) => {
        const {
          id,
          title,
          price,
          image,
        } = edge.node.childMarkdownRemark.frontmatter
        const { slug } = edge.node.childMarkdownRemark.fields

        return (
          <ProductThumbnail
            id = {id}
            title={title}
            price={price}
            image={image}
            slug={slug}
            key={index}
          ></ProductThumbnail>
        )
      })}
    </Container>
  )
}
export default ProductGrid
