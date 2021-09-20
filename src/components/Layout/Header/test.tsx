import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import Header from ".."

describe("Header component", () => {
  test("matches snapshot", () => {
    const { container } = render(<Header children="" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test("renders Header with correct site title", () => {
    render(<Header children="" />)

    expect(screen.getByText("StoreFront")).toBeInTheDocument()
  })

  // test("displays toggle menu on small screens", ()=>{
  //   render(<Header children="" />)

  //   expect(screen.getByAltText("toggle-menu")).toBeInTheDocument()

  // })

  // test("does not display toggle menu on large screens", ()=>{
  //   render(<Header children="" />)

  //   expect(screen.queryAllByAltText("toggle-menu")).toBeNull()

  // })
})

// describe("click outside toggle menu", () => {
//   test("Nav remains visible when clicking inside component ", () => {
//     render(<Header children="" />)
//     const Button = screen.getByRole("button")
//     const Nav = screen.getAllByRole("navigation", { hidden: true })[0]
//     fireEvent.click(Button)
//     fireEvent.click(Nav)
//     expect(Nav).toBeVisible()
//   })

//   test("Nav is not visible when clicking outside component", () => {
//     render(<Header children="" />)
//     const Button = screen.getByRole("button")
//     const Nav = screen.getAllByRole("navigation", { hidden: true })[0]
//     fireEvent.click(Button)
//     fireEvent.mouseDown(Button)
//     expect(Nav).not.toBeVisible()
//   })
// })
