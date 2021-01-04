import React, { ChangeEvent, Dispatch, RefObject } from "react"
import { Container, Select } from "./styled"
import { Action } from "../templates/Product/index"

interface OptionProps {
  dispatch: Dispatch<Action>
  customField: {
    field: string
    name: string
    values: Array<{ name: string; priceChange: string }>
  } 
}

type HTMLElementEvent<T extends HTMLElement> = ChangeEvent & {
  target: T
  currentTarget: T
}

const Options: React.FC<OptionProps> = ({
  customField,
  dispatch
}: OptionProps) => {
  const handleChange = (event: HTMLElementEvent<HTMLSelectElement>) => {
    dispatch({ type: customField.field, payload: event.target.value })
    console.log(customField)
  }

  return (
    <Container>
      <label htmlFor={customField.name}></label>
      <Select
        onChange={e => {
          handleChange(e)
        }}
      >
        <option selected value="">
          select an option
        </option>
        {customField.values.map((value: any) => {
          return (
            <option value={value.name} key={value.name}>
              {value.name}
            </option>
          )
        })}
      </Select>
    </Container>
  )
}

export default Options
