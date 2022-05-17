import React from "react"
import { fireEvent, render } from "@testing-library/react"
import ImageGallery from "./index"
import { getImageGalleryData } from "../../../__mocks__/mock-data"

const mockDispatch = jest.fn()

const props = {
  galleryImages: getImageGalleryData(),
  dispatch: mockDispatch,
  selected: getImageGalleryData()[0].childImageSharp.gatsbyImageData,
}

describe("ImageGallery Component", () => {
  test("matches snapshot", () => {
    const { container } = render(<ImageGallery {...props}></ImageGallery>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test("dispatch is called when gallery image is clicked ", () => {
    const {getAllByRole} = render(<ImageGallery {...props}></ImageGallery>)
    const image = getAllByRole("listitem")[0]
    fireEvent.click(image)
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
})

test("component renders gallery Images", () => {
  const { getAllByAltText } = render(<ImageGallery {...props}></ImageGallery>)

  expect(getAllByAltText("gallery image").length).toEqual(
    getImageGalleryData().length
  )
})

test("component does not render images if galleryImages array is empty", () => {
  const { queryAllByAltText } = render(
    <ImageGallery {...props} galleryImages={[]}></ImageGallery>
  )
  expect(queryAllByAltText("gallery images").length).toEqual(0)
  
})
