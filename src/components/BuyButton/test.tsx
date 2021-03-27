import React from "react"
import { render, screen } from "@testing-library/react"
import BuyButton from "."

describe("BuyButton Component", () => {
  test("matches snapshot", () => {
    const { container } = render(
      <BuyButton
        data-item-id=""
        data-item-price={0}
        data-item-name=""
        data-item-description=""
        data-item-image=""
        data-item-url=""
        data-item-custom1-name=""
        data-item-custom1-options=""
        data-item-custom1-value=""
      ></BuyButton>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
