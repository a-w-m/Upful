import React from "react"
import { C } from "../interfaces"
import ProductThumbnail from "../ProductThumbnail"
import { Container } from "./style"

const ProductGrid: React.FC<C.Grid> = props => {
  return (
    <Container>
      {props.edges.map((edge, index) => {
        const { title, price, image } = edge.node.childMarkdownRemark.frontmatter
        const { slug } = edge.node.childMarkdownRemark.fields

        return (
          <ProductThumbnail
            title={title}
            price={price}
            image={image}
            slug={slug}
            key = {index}
          ></ProductThumbnail>
        )
      })}
    </Container>
  )
}
export default ProductGrid

