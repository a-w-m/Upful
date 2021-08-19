import React, { ChangeEvent, Dispatch } from "react"
import { graphql } from "gatsby"
import { Container, Label, Input, Field } from "./styled"
import { P } from "../../interfaces/index"

interface OptionProps {
  dispatch: P.Dispatch
  productOptions: P.ProductOption[]
  selected: { [name: string]: P.Options } | null
}

type HTMLElementEvent<T extends HTMLElement> = ChangeEvent & {
  target: T
  currentTarget: T
}

const Options: React.FC<OptionProps> = props => {
  const { dispatch, productOptions, selected } = props

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    priceChange: number
  ) => {
    dispatch({
      type: "SET_PRODUCT_OPTION",
      payload: {
        customField: event.target.name,
        option: event.target.value,
        priceChange,
      },
    })
  }

  return (
    <>
      {productOptions.map(productOption => {
        return (
          <Container name={`Select ${productOption.customField}`}>
            <Field>{`${productOption.customField} | ${
              selected ? selected[`${productOption.customField}`]["option"] : ""
            }`}</Field>
            {productOption.options.map(({ option, priceChange }) => {
              return (
                <>
                  <Input
                    type="radio"
                    id={option}
                    value={option}
                    key={option}
                    name={productOption.customField}
                    onChange={e => handleChange(e, priceChange)}
                  ></Input>
                  <Label htmlFor={option}>{option}</Label>
                </>
              )
            })}
          </Container>
        )
      })}
    </>
  )
}

export default Options

export const query = graphql`
  fragment CustomFields on MarkdownRemark {
    frontmatter {
      productOptions {
        customField
        options {
          option
          priceChange
        }
      }
    }
  }
`
