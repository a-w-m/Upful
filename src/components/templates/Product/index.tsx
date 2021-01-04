import React, { useReducer, useRef } from "react"
import { graphql } from "gatsby"
import Layout from "../../layout/layout"
import Img from "gatsby-image"
import Options from "../../ProductForm/index"
import BuyButton from "../../BuyButton/index"
import {
  TitleContainer,
  Title,
  BasePrice,
  DescriptionWrapper,
  Description,
} from "./styled"

interface CustomField {
  field: string
  name: string
  values: Array<{ name: string; priceChange: string }>
}

interface Props {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        price: string
        image: any
        id: string
        description: string
        date: string
        customField1: CustomField | false
        customField2: CustomField | false
      }
    }
  }
  pageContext: {
    slug: string
  }
}

interface State {
  customFieldSelected1?: string
  customFieldSelected2?: string
  quantitySelected?: string
}

export interface Action {
  type: string
  payload: string
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "one":
      return { ...state, customFieldSelected1: action.payload }
    case "two":
      return { ...state, customFieldSelected2: action.payload }
    case "quantity":
      return { ...state, quantitySelected: action.payload }
    default:
      return { ...state }
  }
}

const createOptionsString = (values: CustomField["values"]) => {
  if (values) {
    return values
      .map(value => {
        return value.name
      })
      .join("|")
  } else {
    return
  }
}


const Product: React.FC<Props> = ({ data, pageContext }) => {
  const [state, dispatch] = useReducer(reducer, {})
  const { slug } = pageContext
  const customField1 = data.markdownRemark.frontmatter.customField1 ? data.markdownRemark.frontmatter.customField1  : {field: "", name: "", values: [{name:"", priceChange:""}]}
  const customField2 = data.markdownRemark.frontmatter.customField2 ? data.markdownRemark.frontmatter.customField2: {field: "", name: "", values: [{name:"", priceChange:""}]} 

  const {
    title,
    price,
    image,
    id,
    description,
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <TitleContainer>
        <Title>{title}</Title>
        <BasePrice> ${price}</BasePrice>
      </TitleContainer>
      <Img fluid={image.childImageSharp.fluid}></Img>

      <BuyButton
      
        data-item-id={id}
        data-item-price={price}
        data-item-name={title}
        data-item-description={description}
        data-item-image={image}
        data-item-url={slug}
        data-item-custom1-name={customField1.name}
        data-item-custom1-options={
        createOptionsString(customField1.values)
        }
        data-item-custom1-value={state.customFieldSelected1}
        data-item-custom2-name={customField2.name}
        data-item-custom2-options={
        createOptionsString(customField2.values)
        }
        data-item-custom2-value={state.customFieldSelected2}
      >Add to Cart</BuyButton>
      {customField1 && (
        <Options customField={customField1} dispatch={dispatch}></Options>
      )}
      {customField2 && (
        <Options customField={customField2} dispatch={dispatch}></Options>
      )}

      <DescriptionWrapper>
        <Description>{description}</Description>
      </DescriptionWrapper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        price
        image {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        id
        description
        date
        customField1 {
          field
          values {
            name
            priceChange
          }
        }
        customField2 {
          field
          values {
            name
            priceChange
          }
        }
      }
    }
  }
`
export default Product
