import React from "react"
import { render, screen } from "@testing-library/react"
import Markdown from "./index"
const mockData = {
  data: {
    file: {
      childMarkdownRemark: {
        html: "<p>TEST</p>",
      },
    },
  },
}

describe("Markdown component", () => {
  test("snapshot", () => {
    const { container } = render(<Markdown {...mockData} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test("render html", () => {
    render(<Markdown {...mockData} />)
    const html = screen.getByText("TEST")
    expect(html).toBeInTheDocument()
  })
})
