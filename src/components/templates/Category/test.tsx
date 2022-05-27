import React from "react"
//import custom render
import { render, screen } from "src/utils/test/test-utils"
import Category from "./index"
import { getProductGridData } from "src/utils/test/data"

const mockData = {
  allFile: { ...getProductGridData() },
}

const mockPageContext = {
  currentPage: 1,
  category: "Test",
  limit: 4,
  skip: 0,
  numPages: 1,
}

describe("Category", () => {
  it("matches snapshot", () => {
    const { container } = render(
      <Category data={mockData} pageContext={mockPageContext}></Category>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it("should display category heading", () => {
    render(<Category data={mockData} pageContext={mockPageContext}></Category>)
    const heading = screen.queryByRole("heading", { level: 1 })
    expect(heading).toBeInTheDocument()
  })

  it("should not display pagination if there is only one page of products", () => {
    render(<Category data={mockData} pageContext={mockPageContext}></Category>)
    const pagination = screen.queryByText("/Page/")
    expect(pagination).toBeNull()
  })

  it("should display pagination if there is more than one page of products", () => {
    render(
      <Category
        data={mockData}
        pageContext={{ ...mockPageContext, numPages: 2 }}
      ></Category>
    )
    const pagination = screen.getByText("Page 1 of 2")
    expect(pagination).toBeInTheDocument
  })

  it("should display all products in the category", () => {
    render(<Category data={mockData} pageContext={mockPageContext}></Category>)
    const products = screen.getAllByRole("article")
    expect(products).toHaveLength(mockData.allFile.edges.length)
  })
})
