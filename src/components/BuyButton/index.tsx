import React from "react"
import { Button } from "./styled"
import { P } from "../../interfaces/index"
import { createCustomOptionsProps, createOptionsString } from "../../helpers"

interface Props {
  "data-item-id": String
  "data-item-price": String
  "data-item-url": String
  "data-item-name": String
  "data-item-description": String
  "data-item-image": String
  "data-item-weight"?: number
  "data-item-max-quantity": number
  productOptions: P.ProductOption[]
  optionsSelected: P.State["optionsSelected"]
}

const BuyButton: React.FC<Props> = (props: Props) => {
  const customOptions = createCustomOptionsProps(
    props.productOptions,
    props.optionsSelected
  )

  return (
    <Button
      className="snipcart-add-item"
      data-item-id={props["data-item-id"]}
      data-item-price={props["data-item-price"]}
      data-item-url={props["data-item-url"]}
      data-item-name={props["data-item-name"]}
      data-item-description={props["data-item-description"]}
      data-item-image={props["data-item-image"]}
      data-item-weight={props["data-item-weight"]}
      data-item-max-quantity={props["data-item-max-quantity"]}
      {...customOptions}
      disabled={props["data-item-max-quantity"] > 0 ? false : true}
    >
      {props["data-item-max-quantity"] > 0 ? "Add to Cart" : "Sold Out"}
    </Button>
  )
}

export default BuyButton
