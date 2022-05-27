import React from "react"
import { render, screen } from "src/utils/test/test-utils"
import Markdown from "./index"
const mockData = {
  data: {
    markdownRemark: {
      frontmatter:{
        title: 'TEST'
      },
      html: '<p>html</p>'
      },
    },
  }

describe("Markdown", () => {

  it("should match snapshot", () => {
    const { container } = render(<Markdown {...mockData} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("should render html", () => {
    render(<Markdown {...mockData} />)
    const html = screen.getByText("html")
    expect(html).toBeInTheDocument()

  })

  it("should render title", ()=>{
    render(<Markdown {...mockData} />)
    const title = screen.getByRole('heading', {level: 1, name: 'TEST'})
    expect(title).toBeInTheDocument()
  })
})
