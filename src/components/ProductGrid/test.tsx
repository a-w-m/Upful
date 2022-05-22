import React from "react"
import { render, screen } from "src/utils/test/test-utils"
import ProductGrid from "./index"
import { getProductGridData } from "src/utils/test/data/"

describe("ProductGrid", () => {
  const mockData = getProductGridData()
  beforeEach(() => {
    render(<ProductGrid {...mockData} />)
  })

  it("should match snapshot", () => {
    expect(document.body).toMatchSnapshot()
  })

  it("should display all products passed as props", () => {
    const products = screen.getAllByRole("article")
    expect(products).toHaveLength(mockData.edges.length)
  })
})
