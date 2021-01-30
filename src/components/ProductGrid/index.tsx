import React from "react"
import { graphql } from "gatsby"
import { P } from "../interfaces"
import ProductThumbnail from "../ProductThumbnail"
import { Container } from "./style"

const ProductGrid: React.FC<P.AllMarkdownRemark> = props => {
  return (
    <Container>
      {props.edges.map((edge, index) => {
        const { title, price, image } = edge.node.frontmatter
        const { slug } = edge.node.fields

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

