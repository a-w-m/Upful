import React from "react"
import { render, fireEvent} from "@testing-library/react"
import { SnipcartContext } from "gatsby-plugin-snipcart-advanced/context.js"
import Header from "."

const state = {
  ready: false,
  userStatus: "SignedOut",
  cartQuantity: 0,
  cartTotal: 0,
  cartSubTotal: 0,
}

const Provider = ()=> <SnipcartContext.Provider value = {{state}}></SnipcartContext.Provider>

describe("Header component", () => {
  test("if snapshot matches", () => {
    const { container } = render(
        <Header siteTitle={""} />
    , {wrapper: Provider}
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test("if toggle button is visible in default view", () => {
    const { getByRole } = render(
      <SnipcartContext.Provider value={{ state }}>
        <Header siteTitle={""} />
      </SnipcartContext.Provider>
    )

    expect(getByRole("button", { name: "open navigation" })).toBeVisible()
  })

  test("if logo is in the document", () => {
    const { getByRole } = render(
      <SnipcartContext.Provider value={{ state }}>
        <Header siteTitle={""} />
      </SnipcartContext.Provider>
    )
    expect(getByRole("img", { name: "logo" })).toBeInTheDocument()
  })

  test("if snipcart cart is in the document", ()=>{
    const {getByRole} = render(
      <SnipcartContext.Provider value={{ state }}>
        <Header siteTitle={""} />
      </SnipcartContext.Provider>
    )

    expect(getByRole("button", {name: "snipcart-checkout"})).toBeInTheDocument();
  })

  test("if nav element is not visible in default view", () => {
    const { getAllByRole } = render(
      <SnipcartContext.Provider value={{ state }}>
        <Header siteTitle={""} />
      </SnipcartContext.Provider>
    )
    const Nav = getAllByRole("navigation", { hidden: true })[0]
    expect(Nav).not.toBeVisible()
  })
  test("if clicking toggle button makes nav element visible", () => {
    const { getAllByRole } = render(
      <SnipcartContext.Provider value={{ state }}>
        <Header siteTitle={""} />
      </SnipcartContext.Provider>
    )
    const Button = getAllByRole("button")[0]
    const Nav = getAllByRole("navigation", { hidden: true })[0]
    fireEvent.click(Button)
    expect(Nav).toBeVisible()
  })

  test("if clicking toggle button a second time makes nav element not visible", () => {
    const { getAllByRole } = render(
      <SnipcartContext.Provider value={{ state }}>
        <Header siteTitle={""} />
      </SnipcartContext.Provider>
    )
    const Button = getAllByRole("button")[0]
    const Nav = getAllByRole("navigation", { hidden: true })[0]
    fireEvent.click(Button)
    fireEvent.click(Button)
    expect(Nav).not.toBeVisible()
  })
})
