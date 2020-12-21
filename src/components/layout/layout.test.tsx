import React from "react"
import { render, screen } from "@testing-library/react"
import Layout from "./layout"

describe("Layout component", () => {
  test("should match snapshot", () => {
    render(<Layout children="" />)
    const { container } = render(<Layout children="" />)

    expect(container.firstChild).toMatchSnapshot()
  })

  test("should display correct title and date", () => {
    render(<Layout children="" />)

    expect(screen.getByText("StoreFront")).toBeInTheDocument()
    expect(screen.getByText(/2019/)).toBeInTheDocument()
  })
})
