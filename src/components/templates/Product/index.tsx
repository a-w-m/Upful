import React, { useContext, useReducer, useRef } from "react"
import { Context } from "../../Provider"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { P } from "../../interfaces"
import { createOptionsSelected, calculateTotalPriceChange } from "../../../helpers/index"
import Layout from "../../layout"
import SEO from "../../seo"
import ProductNav from "../../ProductNav"
import Options from "../../ProductForm/"
import BuyButton from "../../BuyButton/"
import ImageGallery from "../../ImageGallery"
import ShareButton from "../../ShareButton"
import EmailButton from "../../EmailButton"
import {
  ProductContainer,
  ProductForm,
  TitleContainer,
  Title,
  BasePrice,
  ShareButtonWrapper,
  DescriptionWrapper,
  DescriptionContents,
} from "./styled"

function reducer(state: P.State, action: P.Action): P.State {
  switch (action.type) {
    case "SET_IMAGE":
      return { ...state, imageSelected: action.payload }
    case "SET_PRODUCT_OPTION":
      const optionsSelected = {...state.optionsSelected}
      optionsSelected[`${action.payload.customField}`] = {option: action.payload.option, priceChange: action.payload.priceChange}
      return { ...state, optionsSelected }
    default:
      return { ...state }
  }
}

const Product: React.FC<P.Product> = ({ data, location }) => {
  const {
    title,
    price,
    id,
    image,
    galleryImages,
    productOptions,
  } = data.markdownRemark.frontmatter
  const collection = data.markdownRemark.parent.sourceInstanceName
  const { html } = data.markdownRemark
  const { slug } = data.markdownRemark.fields
  const url = data.site.url || location.hostname
  const path = url + slug
  const { inventory, isLoading } = useContext(Context)

  const optionsSelected = createOptionsSelected(productOptions)
  const [state, dispatch] = useReducer(reducer, {
    imageSelected: image.childImageSharp.gatsbyImageData,
    optionsSelected  
  })
  const ref = useRef<HTMLDivElement>(null)
  const description = ref.current
    ? ref.current.innerText
    : "Upful - Made with full irations"

  const imgURL = `${url}${state.imageSelected.images.fallback?.src}`



  return (
    <Layout>
      <SEO title={title} description={description} url={path} image={imgURL} />
      <ProductContainer>
        <ProductNav title = {title} collection = {collection}></ProductNav>
        <ImageGallery
          images={[image].concat(galleryImages)}
          dispatch={dispatch}
          selected = {state.imageSelected}
        ></ImageGallery>

        <TitleContainer>
          <BasePrice> ${(price + calculateTotalPriceChange(state.optionsSelected)).toFixed(2)}</BasePrice>
          <Title>{title}</Title>
        </TitleContainer>

        <DescriptionWrapper>
          <DescriptionContents
            ref={ref}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </DescriptionWrapper>

        <ProductForm>
          {state.optionsSelected && (
            <Options productOptions={productOptions} dispatch={dispatch} selected = {state.optionsSelected}></Options>
          )}

          {!isLoading && (
            <BuyButton
              data-item-id={id}
              data-item-price={price.toFixed(2)}
              data-item-name={title}
              data-item-description={description}
              data-item-image={
                image.childImageSharp.gatsbyImageData.images.fallback?.src || ""
              }
              data-item-url={`${slug}`}
              data-item-max-quantity={
                inventory[id] ? inventory[id].stock : 1
              }
              productOptions = {productOptions}
              optionsSelected = {state.optionsSelected}
            ></BuyButton>
          )}
        </ProductForm>

        <ShareButtonWrapper>
          <EmailButton title={title} />
          <ShareButton title={title} path={path} image={imgURL} />
        </ShareButtonWrapper>
      </ProductContainer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...Frontmatter
      ...CustomFields
      html
      fields {
        slug
      }
      parent {
        ... on File {
          sourceInstanceName
        }
      }
    }

    site {
      siteMetadata {
        url
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
      image {
        childImageSharp {
          ...ImageGalleryFragment
        }
      }
      galleryImages {
        childImageSharp {
          ...ImageGalleryFragment
        }
      }
    }
  }
`
export default Product
