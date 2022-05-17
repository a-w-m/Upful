import React from "react"
import { render } from "@testing-library/react"
import EmailButton from "."

const props ={
    title: "test-email"
}

describe("EmailButton component", () => {
  test("matches snapshot", () => {
    const { container } = render(<EmailButton {...props}></EmailButton>)
    expect(container.firstChild).toMatchSnapshot()
  })


  test("component displays correct text", ()=>{
    const { queryByText } = render(<EmailButton {...props}></EmailButton>)
    expect(queryByText("Email us about this product")).toBeTruthy();

  })

  test("component has correct href", ()=>{
    const { getByRole } = render(<EmailButton {...props}></EmailButton>)

    // Click button
    expect(getByRole('link')).toHaveAttribute("href", `mailto:howdy@upful.com?Subject=${props.title}`)


  })

 
})
