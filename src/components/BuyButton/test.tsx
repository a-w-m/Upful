import React from "react"
import { render, screen } from "@testing-library/react"
import BuyButton from "."

const props = {
  "data-item-id": "",
  "data-item-price": "10",
  "data-item-name": "",
  "data-item-description": "",
  "data-item-image": "",
  "data-item-url": "",
  "data-item-custom1-name": "",
  "data-item-custom1-options": "",
  "data-item-custom1-value": "",
  "data-item-max-quantity": 1,
  productOptions: [],
  optionsSelected: null,
}

describe("BuyButton Component", () => {

  it("matches snapshot", () => {
    render(<BuyButton {...props}></BuyButton>)
    const button = screen.getByRole("button")
    expect(button).toMatchSnapshot()
  })

  it("should not be disabled if max-quantity is greater than 0", () => {
    render(<BuyButton {...props}></BuyButton>)
    const button = screen.queryByRole("button")
    expect(button).not.toBeDisabled()
  })

  it("should display 'Add to Cart' if max-quantity is greater than 0", () => {
    render(<BuyButton {...props}></BuyButton>)
    const button = screen.getByRole("button", {name: /Add to Cart/})
    expect(button).toBeInTheDocument()
  })

  it("should not display 'Sold Out' if max-quantity is greater than 0", () => {
    render(<BuyButton {...props}></BuyButton>)
    const button = screen.queryByRole("button", {name: /Sold Out/})
    expect(button).toBeNull()
  })

  it("should be disabled if max-quantity is not greater than 0", () => {
    render(
      <BuyButton {...props} data-item-max-quantity={0}></BuyButton>
    )
    const button = screen.getByRole("button")

    expect(button).toBeDisabled()
  })

  it("component renders 'Sold Out' if max-quantity is not greater than 0", () => {
    render(
      <BuyButton {...props} data-item-max-quantity={0}></BuyButton>
    )
    const button = screen.getByRole("button", {name: /Sold Out/})

    expect(button).toBeInTheDocument()
  })

  it("component does not render 'Add to Cart' if max-quantity is not greater than 0", () => {
   render(
      <BuyButton {...props} data-item-max-quantity={0}></BuyButton>
    )
    const button = screen.queryByRole("button", {name: /Add to Cart/})

    expect(button).toBeNull()
  })
})
