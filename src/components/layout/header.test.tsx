import React from "react"
import { render, screen } from "@testing-library/react"
import Header from "./layout"

describe("Header component", () => {
  test("matches snapshot", () => {
    const { container } = render(<Header children="" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test("renders Header with correct site title", () => {
    render(<Header children="" />)

    expect(screen.getByText("StoreFront")).toBeInTheDocument()
  })
})
