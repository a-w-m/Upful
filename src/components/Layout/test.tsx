import React from "react"
import { render, screen } from "@testing-library/react"
import Layout from "."
import {SnipcartContextProvider} from "test-utils"


describe("Layout", () => {
  const child = <h1>child</h1>
  beforeEach(()=>{
  render(<Layout children= {child}/>, {wrapper: SnipcartContextProvider})
  })

  it("should match snapshot", () => {
    const {container} = render(<Layout children={child} />, {wrapper: SnipcartContextProvider})
    expect(container.firstChild).toMatchSnapshot()

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
