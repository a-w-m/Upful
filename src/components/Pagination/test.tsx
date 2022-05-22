import React from "react"
import { render, screen } from "@testing-library/react"
import Pagination from "../Pagination"

const mockData = {
  numPages: 3,
  currentPage: 1,
  category: "TEST",
}

describe("Pagination", () => {
  it("matches snapshot", () => {
    const { container } = render(<Pagination {...mockData} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("should display the current page", () => {
    render(<Pagination {...mockData} />)
    const pageInfo = screen.getByText(
      `Page ${mockData.currentPage} of ${mockData.numPages}`
    )
    expect(pageInfo).toBeInTheDocument()
  })

  it("should not display previous page link when on first page", () => {
    render(<Pagination {...mockData} />)
    const previousLink = screen.queryByRole("link", { name: /previous/i })
    expect(previousLink).toBeNull()
  })

  it("should link to category page when the previous page is the first page", () => {
    render(<Pagination {...mockData} currentPage={mockData.currentPage+1} />)
    const previous = screen.getByRole("link", { name: /previous/i })
    expect(previous).toHaveAttribute('href', `/${mockData.category}/`)
  })

  it("should link to previous numbered page when the previous page is not the first page", () => {
    render(<Pagination {...mockData} currentPage={mockData.numPages} />)
    const previous = screen.getByRole("link", { name: /previous/i })
    expect(previous).toHaveAttribute('href', `/${mockData.category}/${mockData.numPages-1}/`)
  })

  it("should not display next page link when on last page", () => {
    render(<Pagination {...mockData} currentPage={mockData.numPages} />)
    const next = screen.queryByRole("link", {name: /next/i})
    expect(next).toBeNull()
  })

  it("should link to the next page when not on last page", ()=>{
    render(<Pagination {...mockData} />)
    const next = screen.queryByRole("link", {name: /next/i})
    expect(next).toHaveAttribute('href', `/${mockData.category}/${mockData.currentPage+1}/`)

  })
})
