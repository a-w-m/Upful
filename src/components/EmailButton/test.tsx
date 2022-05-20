import React from "react"
import { render, screen } from "@testing-library/react"
import EmailButton from "."

const props = {
  title: "test-email",
}

describe("Email", () => {
  beforeEach(() => {
    render(<EmailButton {...props}></EmailButton>)
  })

  it("should match snapshot", () => {
    const link = screen.getByRole("link", { name: /Email/i })
    expect(link).toMatchSnapshot()
  })

  it("should display icon", ()=>{
    const icon = screen.getByRole("img")
    expect(icon).toBeInTheDocument()
  })

  it("should display descriptive text", () => {
    const description = screen.getByText(/Email us about this product/)
    expect(description).toBeInTheDocument()
  })

  it("should have correct href", () => {
    const link = screen.getByRole("link")

    expect(link).toHaveAttribute(
      "href",
      `mailto:howdy@upful.com?Subject=${props.title}`
    )
  })
})
