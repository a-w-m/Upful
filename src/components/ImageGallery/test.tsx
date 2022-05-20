import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ImageGallery from "./index"
import { getImageGalleryData } from "../../../__mocks__/mock-data"

const mockDispatch = jest.fn()

const props = {
  galleryImages: getImageGalleryData(),
  dispatch: mockDispatch,
  selected: getImageGalleryData()[0].childImageSharp.gatsbyImageData,
}

describe("ImageGallery", () => {
  it("should match snapshot", () => {
    const { container } = render(<ImageGallery {...props}></ImageGallery>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("should display the default selected image", () => {
    render(<ImageGallery {...props}></ImageGallery>)
    const image = screen.getByRole("img", { name: /selected/ })

    expect(image).toBeInTheDocument
  })

  it("should display no gallery images if none received in props", () => {
    render(<ImageGallery {...props} galleryImages={[]}></ImageGallery>)
    const images = screen.queryAllByRole("img", { name: /gallery/ })

    expect(images).toHaveLength(0)
  })

  it("should display all the images received in props", () => {
    render(<ImageGallery {...props}></ImageGallery>)
    const images = screen.getAllByRole("img", { name: /gallery/ })
    expect(images.length).toEqual(getImageGalleryData().length)
  })

 
  it("should call dispatch function when user clicks gallery image", async () => {
    const user = userEvent.setup()
    render(<ImageGallery {...props}></ImageGallery>)
    const image = screen.getAllByRole("listitem")[0]
    await user.click(image)
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
})
