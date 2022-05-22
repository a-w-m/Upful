import React from "react"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Option from "./index"
import { getProductFormData } from "../../../__mocks__/mock-data"

describe("Option", () => {
  const dispatchMock = jest.fn()

  beforeEach(() => {
    render(
      <Option
        productOptions={getProductFormData()}
        dispatch={dispatchMock}
        selected={null}
      ></Option>
    )
  })

  // clear mocks to prevent userEvent history from persisting across tests
  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  it("matches snapshot", () => {
    const form = screen.getByRole("form")
    expect(form).toMatchSnapshot()
  })

  it("should display name of custom field", () => {
    const field = screen.getByText(/Size/i)
    expect(field).toBeInTheDocument()
  })

  it("should display each radio input", () => {
    const inputs = screen.getAllByRole("radio")
    expect(inputs).toHaveLength(getProductFormData()[0].options.length)
  })

  it("should display each label", ()=>{
    const labels = document.querySelectorAll('label')
    expect(labels).toHaveLength(getProductFormData()[0].options.length)
  })

  it("should display name of option that user clicks", async () => {
    const user = userEvent.setup()
    const option = screen.getByRole("radio", { name: /large/i })
    await user.click(option)
    const selected = screen.getByText(/Size | Large/)
    expect(selected).toBeInTheDocument()
  })

  it("should call dispatch when user clicks option", async () => {
    const user = userEvent.setup()
    const option = screen.getByRole("radio", { name: /large/i })
    await user.click(option)
    expect(dispatchMock).toHaveBeenCalledTimes(1)
  })
})
