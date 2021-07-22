import React, { ChangeEvent, Dispatch } from "react"
import { graphql } from "gatsby"
import { Container, Label, Select } from "./styled"
import { P } from "../interfaces/index"

interface OptionProps {
  dispatch: P.Dispatch
  customField: P.CustomField
}

type HTMLElementEvent<T extends HTMLElement> = ChangeEvent & {
  target: T
  currentTarget: T
}

const Options: React.FC<OptionProps> = ({
  customField,
  dispatch,
}: OptionProps) => {
  const handleChange = (event: HTMLElementEvent<HTMLSelectElement>) => {
    dispatch({ type: "customField", payload: event.target.value })
  }

  return (
    <Container>
      <Label htmlFor={customField.field}>{customField.field}</Label>
      <Select
        id={customField.field}
        defaultValue={""}
        onChange={e => {
          handleChange(e)
        }}
      >
        <option value="">select an option</option>
        {customField.values.map((value: any) => {
          return (
            <option value={value.option} key={value.option}>
              {value.option}
            </option>
          )
        })}
      </Select>
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
