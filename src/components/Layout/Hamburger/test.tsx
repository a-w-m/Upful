import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Hamburger from "."

describe("Hamburger component", () => {
  const setOpen = jest.fn()

  it("should match snapshot", () => {
    render(<Hamburger open={false} setOpen={setOpen} />)
    const button = screen.getByRole("button")
    expect(button).toMatchSnapshot()
  })

  it("should handle click", async () => {
    render(<Hamburger open={false} setOpen={setOpen} />)
    const user = userEvent.setup()
    const button = screen.getByRole("button")
    await user.click(button)
    expect(setOpen).toHaveBeenCalledTimes(1)
  })

  it("should apply style when open", () => {
    render(<Hamburger open={true} setOpen={setOpen} />)
    const menu = document.querySelectorAll("span")
    expect(menu[0]).toHaveStyle({ transform: "rotate(45deg)" })
    expect(menu[1]).toHaveStyle({ opacity: "0", transform: "translateX(2rem)" })
    expect(menu[2]).toHaveStyle({ transform: "rotate(-45deg)" })
  })

  it("should apply style when not open", () => {
    render(<Hamburger open={false} setOpen={setOpen} />)
    const menu = document.querySelectorAll("span")
    expect(menu[0]).toHaveStyle({ transform: "rotate(0)" })
    expect(menu[1]).toHaveStyle({ opacity: "1", transform: "translateX(0)" })
    expect(menu[2]).toHaveStyle({ transform: "rotate(0)" })
  })
})
