import React, { useEffect, useReducer } from "react"
import { graphql } from "gatsby"
import Layout from "../../layout"
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
  DescriptionHeading,
  DescriptionContents,
} from "./styled"
import { P } from "../../interfaces"
import { createOptionsString } from "../../../helpers/index"

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
    id,
    description,
    customField1,
    customField2,
  } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark
  const images = data.allFile.edges
  const { slug } = data.markdownRemark.fields
  const [state, dispatch] = useReducer(reducer, {
    imageSelected: images[0].node.childImageSharp.gatsbyImageData,
  })

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://shipping--thirsty-blackwell-f130f4.netlify.app/.netlify/functions/getProductQuantity?id=${id}`
      )
      const data = res.json()
      console.log(res)
      
      console.log(data)
    }
    fetchData()
  }, [])

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

        {customField1 && (
          <Options customField={customField1} dispatch={dispatch}></Options>
        )}
        {customField2 && (
          <Options customField={customField2} dispatch={dispatch}></Options>
        )}

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
