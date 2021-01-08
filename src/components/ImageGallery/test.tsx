import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import ImageGallery from "./index"
import { fluid } from "../../../__mocks__/mock-data"

describe("ImageGallery Component", () => {
  const mockDispatch = jest.fn()
  const images = [fluid]
  const { container } = render(
    <ImageGallery images={images} dispatch={mockDispatch}></ImageGallery>
  )

  test("matches snapshot", () => {
    const { container } = render(
      <ImageGallery images={images} dispatch={mockDispatch}></ImageGallery>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test("dispatch is called when gallery image is clicked ", () => {
    render(
      <ImageGallery images={images} dispatch={mockDispatch}></ImageGallery>
    )
    const image = screen.getAllByRole("listitem")[0]
    fireEvent.click(image)
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
})

test("no list rendered when no images supplied", () => {
  const { container } = render(
    <ImageGallery images={[]} dispatch={jest.fn()}></ImageGallery>
  )
  expect(container.firstChild).toBeNull()
})
