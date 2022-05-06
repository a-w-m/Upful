import React, { useContext, useReducer, useRef } from "react"
import { useInventory } from "../../Provider"
import { graphql } from "gatsby"
import { getSrc } from "gatsby-plugin-image"
import { P } from "../../../interfaces"
import { createOptionsSelected, calculateTotalPriceChange, convertHTMLtoPlaintext } from "../../../helpers/index"
import Layout from "../../Layout"
import Seo from "../../Seo"
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
    thumbnail,
    galleryImages,
    productOptions,
  } = data.markdownRemark.frontmatter
  const collection = data.markdownRemark.parent.sourceInstanceName
  const { html } = data.markdownRemark
  const { slug } = data.markdownRemark.fields
  
  const url = data.site.url || `https://${location.hostname}`
  const path = url + slug
  const optionsSelected = createOptionsSelected(productOptions)


  const {inventory, loading}  = useInventory()
  const [state, dispatch] = useReducer(reducer, {
    imageSelected: thumbnail.childImageSharp.gatsbyImageData,
    optionsSelected  
  })
 
  const description = convertHTMLtoPlaintext(html)
  const imgURL = `${url}${getSrc(state.imageSelected)}`

  return (
    <Layout>
      <Seo title={title} description={description} url={path} image={imgURL} />
      <ProductContainer>
        <ProductNav title = {title} collection = {collection}></ProductNav>
        <ImageGallery
          galleryImages={[thumbnail].concat(galleryImages)}
          dispatch={dispatch}
          selected = {state.imageSelected}
        ></ImageGallery>

        <TitleContainer>
          <BasePrice> ${(price + calculateTotalPriceChange(state.optionsSelected)).toFixed(2)}</BasePrice>
          <Title>{title}</Title>
        </TitleContainer>

        <DescriptionWrapper>
          <DescriptionContents
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </DescriptionWrapper>

        <ProductForm>
          {state.optionsSelected && (
            <Options productOptions={productOptions} dispatch={dispatch} selected = {state.optionsSelected}></Options>
          )}

          {!loading && (
            <BuyButton
              data-item-id={id}
              data-item-price={price.toFixed(2)}
              data-item-name={title}
              data-item-description={description}
              data-item-image={
                thumbnail.childImageSharp.gatsbyImageData.images.fallback?.src || ""
              }
              data-item-url={`${slug}`}
              data-item-max-quantity={
                inventory[id] ? inventory[id].stock : 0
              }
              productOptions = {productOptions}
              optionsSelected = {state.optionsSelected}
            ></BuyButton>
          )}
        </ProductForm>

        <ShareButtonWrapper>
          <EmailButton title={title} />
          <ShareButton title={title} path={path} imageURL ={imgURL} />
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
      date
      thumbnail {
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
