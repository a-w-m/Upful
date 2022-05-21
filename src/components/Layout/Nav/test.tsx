import React from "react"
import { render, screen } from "@testing-library/react"
import Nav from "."

describe("Nav component", () => {
  it("should match snapshot", () => {
    render(<Nav open={true} />)
    const container = screen.getByRole('navigation')
    expect(container).toMatchSnapshot()
  })

  it("should not be visible when not open", () => {
    render(<Nav open={false} />)
    const navigation = screen.queryByRole('navigation', {hidden: true})
    expect(navigation).not.toBeVisible()
  })

  it("should be visible when open", () => {
    render(<Nav open={true} />)
    const navigation = screen.getByRole("navigation")
    expect(navigation).toBeVisible()
  })

  it("should contain all navigational links", ()=>{
    render(<Nav open={true} />)
    const links =  screen.getAllByRole('link')
    expect(links).toHaveLength(2)
  })

  it("should display Logo", ()=>{
    render(<Nav open={false} />)
    const logo = screen.getByAltText(/logo/)
    expect(logo).toBeInTheDocument()

  })
})
