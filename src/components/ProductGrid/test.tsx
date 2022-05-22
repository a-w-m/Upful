import React from "react"
import { render, screen } from "test-utils"
import ProductGrid from "./index"
import { getProductaGridData } from "../../../__mocks__/mock-data"

jest.mock("../../hooks/useSnipcartApi", () => {
  return jest.fn().mockImplementation(() => {
    return [
      {
        error: false,
        loading: false,
        inventory: {},
      },
      jest.fn(),
    ]
  })
})


describe("ProductGrid", () => {
  const mockData = getProductaGridData()
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
