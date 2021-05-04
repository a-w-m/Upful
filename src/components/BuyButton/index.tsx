import React from "react"
import { Button } from "./styled"

interface Props {
  "data-item-id": String
  "data-item-price": String
  "data-item-url": String
  "data-item-name": String
  "data-item-description": String
  "data-item-image": String
  "data-item-custom1-name"?: String
  "data-item-custom1-options"?: String
  "data-item-custom1-value"?: String
  "data-item-custom2-name"?: String
  "data-item-custom2-options"?: String
  "data-item-custom2-value"?: String
  "data-item-weight"?: number
  "data-item-max-quantity"?: number
}

const BuyButton: React.FC<Props> = (props: Props) => {
  return (
    <Button
      className="snipcart-add-item"
      {...props}
      disabled={props["data-item-max-quantity"]=== undefined || props["data-item-max-quantity"] > 0 ?  false : true}
    >
      {props["data-item-max-quantity"]=== undefined || props["data-item-max-quantity"] > 0 ?"Add to Cart" : "Sold Out"
       }
    </Button>
  )
}

export default BuyButton
