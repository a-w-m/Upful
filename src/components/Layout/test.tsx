import React from "react"
//import custom render function wrapped in context providers
import { render, screen } from "src/utils/test/test-utils"
import Layout from "."


describe("Layout", () => {
  const child = <h1>child</h1>
  beforeEach(()=>{
  render(<Layout children= {child}/>)
  })

  it("should match snapshot", () => {
    expect(document.body).toMatchSnapshot()

  })

  it("should display header", ()=>{
    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
  })

  it("should display footer", ()=>{
    const header = screen.getByRole('contentinfo')
    expect(header).toBeInTheDocument()
  })

  
  it("should display main", ()=>{
    const header = screen.getByRole('main')
    expect(header).toBeInTheDocument()
  })

  it("should display children", ()=>{
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })

  
})
