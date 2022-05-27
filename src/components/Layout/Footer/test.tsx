import React from "react"
import { render, screen, within } from "@testing-library/react"
import Footer from "."
import { getQueryMockData } from "src/utils/test/data"

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />)
  })

  it(" should match snapshot", () => {
    const footer = screen.getByRole("contentinfo")
    expect(footer).toMatchSnapshot()
  })

  it("should display site links", () => {
    const nav = screen.getByRole("navigation")

    const menuLinks = within(nav).getAllByRole("link")
    expect(menuLinks).toHaveLength(4)
  })

  it("should display email address link", () => {
    const email = screen.getByRole("link", {
      name: getQueryMockData.getSiteQuery().site.siteMetadata.email,
    })
    expect(email).toBeInTheDocument()
  })

  it("should display copyright text", () => {
    const copyright = screen.getByText(/© Upful 2022 Made with full Irations/)
    expect(copyright).toBeInTheDocument()
  })
})
