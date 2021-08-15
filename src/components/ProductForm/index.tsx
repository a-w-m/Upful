import React, { ChangeEvent, Dispatch } from "react"
import { graphql } from "gatsby"
import { Container, Label, Input, Field } from "./styled"
import { P } from "../interfaces/index"

interface OptionProps {
  dispatch: P.Dispatch
  customField: P.CustomField
  selected?: string
}

type HTMLElementEvent<T extends HTMLElement> = ChangeEvent & {
  target: T
  currentTarget: T
}

const Options: React.FC<OptionProps> = ({
  customField,
  dispatch,
  selected
}: OptionProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "customField", payload: event.target.value })
  }

  return (
    <Container name = {`Select ${customField.field}`}>
      <Field>{`${customField.field} | ${selected? selected: ""}`}</Field>
      {customField.values.map((value, index) => {
        return (
          <>
            <Input
              checked = {index == Math.floor(customField.values.length/2) ? true: false}
              type="radio"
              id={value.option}
              value={value.option}
              key={value.option}
              name={customField.field}
              onChange={e => handleChange(e)}
            ></Input>
           <Label htmlFor={value.option}>

            {value.option}</Label>
          </>
        )
            })}
    </Container>
  )
}

export default Options

export const query = graphql`
  fragment CustomFields on MarkdownRemark {
    frontmatter {
      customField {
        field
        values {
          option
          priceChange
        }
      }
    }
  }
`
