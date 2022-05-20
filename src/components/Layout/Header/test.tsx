import React from "react"
import { render, screen, act } from "test-utils"
import userEvent from "@testing-library/user-event"
import Header from "."
import { SnipcartContextProvider } from "test-utils"

//wrap render function with SnipcartContextProvider to make SnipcartContext available in tests

beforeEach(() => {
  render(<Header siteTitle={""} />, { wrapper: SnipcartContextProvider })
})

describe("Header", () => {

  it("should match snapshot", () => {
    const header = screen.getByRole("banner")
    expect(header).toMatchSnapshot()
  })

  it("should display navigation toggle button", () => {
    const nav = screen.getByRole("button", { name: "open navigation" })
    expect(nav).toBeInTheDocument()
  })

  it("should display logo", () => {
    const logo = screen.getByRole("img", { name: /logo/ })
    expect(logo).toBeInTheDocument()
  })

  it("should display snipcart cart button ", () => {
    const cartbutton = screen.getByRole("button", {
      name: "snipcart-checkout",
    })
    expect(cartbutton).toBeInTheDocument()
  })

  it("should not display navigation menu in default view", () => {
    const nav = screen.queryByRole("navigation", { hidden: true })
    expect(nav).not.toBeVisible()
  })
})
describe("when user clicks toggle button", () => {

  it("should display navigation menu when user clicks toggle button", async () => {
    const user = userEvent.setup()
    const button = screen.getByRole("button", {
      name: /open navigation/,
    })
    const nav = screen.getByRole("navigation", { hidden: true })
    await user.click(button)
    expect(nav).toBeVisible()
  })

  it("it should not display navigation when user clicks toggle button a second time", async () => {
    const user = userEvent.setup()
    const button = screen.getByRole("button", {
      name: /open navigation/,
    })
    const nav = screen.queryByRole("navigation", { hidden: true })
    await user.dblClick(button)
    expect(nav).not.toBeVisible()
  })
})
