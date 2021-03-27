import React from "react"
import { render, screen } from "@testing-library/react"
import Pagination from "../Pagination"

const mockData = {
  numPages: 3,
  currentPage: 1,
  category: "TEST",
}

describe("Pagination component", () => {
  test("matches snapshot", () => {
    const { container } = render(<Pagination {...mockData} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test("displays pagination information", () => {
    render(<Pagination {...mockData} />)
    const pageInfo = screen.getByText(
      `Page ${mockData.currentPage} of ${mockData.numPages}`
    )
    expect(pageInfo).toBeInTheDocument()
  })

  test("previous page link not visible on first page", () => {
    render(<Pagination {...mockData} />)
    const pageLinks = screen.queryAllByRole("link")
    expect(pageLinks.length).toEqual(1)
    expect(pageLinks[0]).toHaveAttribute("href", `/${mockData.category}/2/`)
  })

  test("pagination links both visible", () => {
    render(<Pagination {...mockData} currentPage={mockData.currentPage + 1} />)
    const pageLinks = screen.queryAllByRole("link")
    expect(pageLinks.length).toEqual(2)
    expect(pageLinks[0]).toHaveAttribute("href", `/${mockData.category}/`)
    expect(pageLinks[1]).toHaveAttribute("href", `/${mockData.category}/3/`)
  })

  test("next page link not visible on last page", () => {
    render(<Pagination {...mockData} currentPage={mockData.numPages} />)
    const pageLinks = screen.queryAllByRole("link")
    expect(pageLinks.length).toEqual(1)
    expect(pageLinks[0]).toHaveAttribute("href", `/${mockData.category}/2/`)
  })
})
