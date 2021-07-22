import React, { useContext, useReducer } from "react"
import { Context } from "../../Provider"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { P } from "../../interfaces"
import { createOptionsString } from "../../../helpers/index"
import Layout from "../../layout"
import Options from "../../ProductForm/"
import BuyButton from "../../BuyButton/"
import ImageGallery from "../../ImageGallery"
import {
  ProductContainer,
  TitleContainer,
  Title,
  BasePrice,
  DescriptionWrapper,
  DescriptionHeading,
  DescriptionContents,
} from "./styled"

function reducer(state: P.State, action: P.Action): P.State {
  switch (action.type) {
    case "image":
      return { ...state, imageSelected: action.payload }
    case "customField":
      return { ...state, customFieldSelected: action.payload }
    default:
      return { ...state }
  }
}

const Product: React.FC<P.Product> = ({ data }) => {
  const {
    title,
    price,
    id,
    description,
    customField,
  } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark
  const images = data.allFile.edges
  const { slug } = data.markdownRemark.fields
  const { inventory, isLoading} = useContext(Context)
  const [state, dispatch] = useReducer(reducer, {
    imageSelected: images[0].node.childImageSharp.gatsbyImageData,
  })

  return (
    <Layout>
      <ProductContainer>
        <TitleContainer>
          <Title>{title}</Title>
          <BasePrice> ${price.toFixed(2)}</BasePrice>
        </TitleContainer>
        <GatsbyImage
          image={state.imageSelected}
          alt=""
          style={{ opacity: 1 }}
        />
        <ImageGallery images={images} dispatch={dispatch}></ImageGallery>

        {customField && (
          <Options customField={customField} dispatch={dispatch}></Options>
        )}
        {!isLoading && (
          <BuyButton
            data-item-id={id}
            data-item-price={price.toFixed(2)}
            data-item-name={title}
            data-item-description={description}
            data-item-image={
              images[0].node.childImageSharp.gatsbyImageData.images.fallback
                ?.src || ""
            }
            data-item-url={`${slug}`}
            data-item-max-quantity={
            inventory[id]? inventory[id].stock : undefined
            }
            data-item-custom1-name={customField?.field}
            data-item-custom1-options={createOptionsString(
              customField?.values ?? []
            )}
            data-item-custom1-value={state.customFieldSelected}
          ></BuyButton>
        )}

        <DescriptionWrapper>
          <DescriptionHeading>Description</DescriptionHeading>
          <DescriptionContents dangerouslySetInnerHTML={{ __html: html }} />
        </DescriptionWrapper>
      </ProductContainer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $pathRegex: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...Frontmatter
      ...CustomFields
      html
      fields {
        slug
      }
    }

    allFile(filter: { relativeDirectory: { regex: $pathRegex } }) {
      edges {
        node {
          childImageSharp {
            ...ImageGalleryFragment
          }
        }
      }
    }
  }
`

export const frontmatterQuery = graphql`
  fragment Frontmatter on MarkdownRemark {
    frontmatter {
      title
      price
      id
      description
      date
    }
  }
`
export default Product
