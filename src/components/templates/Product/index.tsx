import React, { useEffect, useMemo, useReducer, useState } from "react"
import { graphql } from "gatsby"
import Layout from "../../layout/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import Options from "../../ProductForm/"
import BuyButton from "../../BuyButton/"
import ImageGallery from "../../ImageGallery"
import {
  ProductContainer,
  TitleContainer,
  Title,
  BasePrice,
  DescriptionWrapper,
  Description,
} from "./styled"
import { P } from "../../interfaces"
import { createOptionsString } from "../../helpers/index"

function reducer(state: P.State, action: P.Action): P.State {
  switch (action.type) {
    case "image":
      return { ...state, imageSelected: action.payload }
    case "size":
      return { ...state, customFieldSelected1: action.payload }
    case "color":
      return { ...state, customFieldSelected2: action.payload }
    case "quantity":
      return { ...state, quantitySelected: action.payload }
    default:
      return { ...state }
  }
}

const Product: React.FC<P.Product> = ({ data }) => {
  const {
    title,
    price,
    image,
    id,
    description,
    customField1,
    customField2,
  } = data.markdownRemark.frontmatter

  const images = data.allFile.edges

  const [state, dispatch] = useReducer(reducer, {
    imageSelected: images[0].node.childImageSharp.gatsbyImageData,
  })

  const { slug } = data.markdownRemark.fields

  return (
    <Layout>
      <ProductContainer>
        <TitleContainer>
          <Title>{title}</Title>
          <BasePrice> ${price}</BasePrice>
        </TitleContainer>
        <GatsbyImage
          image={state.imageSelected}
          alt=""
          style={{ opacity: 1 }}
          backgroundColor={"white"}
        />
        <ImageGallery
          images={data.allFile.edges}
          dispatch={dispatch}
        ></ImageGallery>

        <BuyButton
          data-item-id={id}
          data-item-price={price}
          data-item-name={title}
          data-item-description={description}
          data-item-image={""}
          data-item-url={slug}
          data-item-custom1-name={customField1?.name}
          data-item-custom1-options={createOptionsString(
            customField1?.values ?? []
          )}
          data-item-custom1-value={state.customFieldSelected1}
          data-item-custom2-name={customField2?.name}
          data-item-custom2-options={createOptionsString(
            customField2?.values ?? []
          )}
          data-item-custom2-value={state.customFieldSelected2}
        >
          Add to Cart
        </BuyButton>
        {customField1 && (
          <Options customField={customField1} dispatch={dispatch}></Options>
        )}
        {customField2 && (
          <Options customField={customField2} dispatch={dispatch}></Options>
        )}

        <DescriptionWrapper>
          <Description>{description}</Description>
        </DescriptionWrapper>
      </ProductContainer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $pathRegex: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        price
        image {
          childImageSharp {
            gatsbyImageData(width: 800, aspectRatio: 1)
          }
        }
        id
        description
        date
        customField1 {
          name
          values {
            name
            priceChange
          }
        }
        customField2 {
          name
          values {
            name
            priceChange
          }
        }
      }
      fields {
        slug
      }
    }
    allFile(filter: { relativeDirectory: { regex: $pathRegex } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 1024
              height: 1024
              transformOptions: { fit: CONTAIN }
              backgroundColor: "white"
            )
          }
        }
      }
    }
  }
`
export default Product
