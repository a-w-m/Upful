import React from "react"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Product from "./index"
import { P } from "../../interfaces/index"
import {
  pageQueryData,
  pageQueryDataNullCustomFields,
} from "../../../../__mocks__/mock-data"


describe("Product Component", () => {
  test("matches snapshot", () => {
    const { container } = render(<Product data={pageQueryData.data} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test("Options do not render when customField is null", () => {
    render(<Product data={pageQueryDataNullCustomFields.data} />)
    const option = screen.queryAllByRole("option")
    expect(option.length).toEqual(0)
  })

  test("Options render when customField is not null", () => {
    render(<Product data={pageQueryData.data} />)
    const option = screen.queryAllByRole("option")
    expect(option.length).toEqual(8)
  })

  test("Button custom value attribute changes when option selected", async () => {
    render(<Product data={pageQueryData.data} />)
    const button = screen.getByText("Add to Cart")

    fireEvent.change(screen.getAllByDisplayValue("select an option")[0], {
      target: { value: "small" },
    })
    await waitFor(() => {
      expect(button).toHaveAttribute("data-item-custom1-value", "small")
    })
  })


  test("Button has no custom value attributes when first rendered", ()=>{
    render(<Product data={pageQueryData.data} />)
    const button = screen.getByText("Add to Cart")
    expect(button).not.toHaveAttribute("data-item-custom1-value")
    expect(button).not.toHaveAttribute("data-item-custom2-value")

  })
})
