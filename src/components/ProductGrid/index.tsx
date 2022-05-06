import React from "react"
import { C } from "../../interfaces"
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
          thumbnail,
          galleryImages
        } = edge.node.childMarkdownRemark.frontmatter
        const { slug } = edge.node.childMarkdownRemark.fields

        return (
          <ProductThumbnail
            id = {id}
            title={title}
            price={price}
            thumbnail={thumbnail}
            slug={slug}
            key={index}
            galleryImages ={galleryImages}
          ></ProductThumbnail>
        )
      })}
    </Container>
  )
}
export default ProductGrid
