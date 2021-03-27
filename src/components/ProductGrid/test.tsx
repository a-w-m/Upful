import React from "react"
import { render, screen } from "@testing-library/react"
import ProductGrid from "./index"
import { ProductGridData } from "../../../__mocks__/mock-data"

describe("ProductGrid component", () => {
  test("matches snapshot", () => {
    const { container } = render(
      <ProductGrid {...ProductGridData}></ProductGrid>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test("renders correct number of thumbnails", () => {
    render(<ProductGrid {...ProductGridData}></ProductGrid>)
    const thumbnails = screen.getAllByRole("article")
    expect(thumbnails.length).toEqual(ProductGridData.edges.length)
  })
})
