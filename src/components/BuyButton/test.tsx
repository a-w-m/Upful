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
  test("matches snapshot", () => {
    const { container } = render(<BuyButton {...props}></BuyButton>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test("component disabled attribute set to false if max-quantity is greater than 0", () => {
    render(<BuyButton {...props}></BuyButton>)
    const queryByRole = screen.queryByRole("button")
    expect(queryByRole?.hasAttribute("disabled").valueOf()).toBe(false)
  })

  test("component renders 'Sold Out' if max-quantity is greater than 0", () => {
    const { queryByText } = render(<BuyButton {...props}></BuyButton>)
    expect(queryByText("Add to Cart")).toBeTruthy()
  })

  test("component does not render 'Sold Out' if max-quantity is greater than 0", () => {
    const { queryByText } = render(<BuyButton {...props}></BuyButton>)
    expect(queryByText("Sold Out")).toBeNull()
  })

  test("component disabled attribute set to true if max-quantity is not greater than 0", () => {
    const { queryByRole } = render(
      <BuyButton {...props} data-item-max-quantity={0}></BuyButton>
    )
    expect(queryByRole("button")?.hasAttribute("disabled").valueOf()).toBe(true)
  })

  test("component renders 'Sold Out' if max-quantity is not greater than 0", () => {
    const { queryByText } = render(
      <BuyButton {...props} data-item-max-quantity={0}></BuyButton>
    )
    expect(queryByText("Sold Out")).toBeTruthy()
  })

  test("component does not render 'Add to Cart' if max-quantity is not greater than 0", () => {
    const { queryByText } = render(
      <BuyButton {...props} data-item-max-quantity={0}></BuyButton>
    )
    expect(queryByText("Add to Cart")).toBeNull()
  })
})
