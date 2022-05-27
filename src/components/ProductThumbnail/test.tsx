import React from "react"
//import custom render wrapped in context providers
import { render, screen, cleanup, waitFor } from "src/utils/test/test-utils"
import userEvent from "@testing-library/user-event/"
import ProductThumbnail from "./index"
import { getProductGridData } from "src/utils/test/data"

//mock data
const { title, id, price, thumbnail, galleryImages } =
  getProductGridData().edges[1].node.childMarkdownRemark.frontmatter
const { slug } = getProductGridData().edges[1].node.childMarkdownRemark.fields

describe("Thumbnail Component", () => {
  beforeEach(() => {
    render(
      <ProductThumbnail
        price={price}
        title={title}
        thumbnail={thumbnail}
        slug={slug}
        id={id}
        galleryImages={galleryImages}
      />
    )
  })

  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  it("matches snapshot", () => {
    const article = screen.getByRole("article")
    expect(article).toMatchSnapshot()
  })
  //displays title
  it("should display title of product", () => {
    const productTitle = screen.getByRole("heading", { name: `${title}` })
    expect(productTitle).toBeInTheDocument()
  })

  //displays price
  it("should display price of product", () => {
    const productPrice = screen.getByText(`${price.toFixed(2)}`)
    expect(productPrice).toBeInTheDocument()
  })

  //has correct link
  it("should link to the product page", () => {
    const link = screen.getByRole("link")
    expect(link).toHaveAttribute("href", `${slug}`)
  })

  //has image
  it("should display image", () => {
    const productThumbnail = screen.getByRole("img", { name: /thumbnail/ })
    expect(productThumbnail).toBeInTheDocument()
  })

  //handles hover
  it("should display gallery image when user hovers over original thumbnail image", async () => {
    const user = userEvent.setup()
    const productThumbnail = screen.getByRole("img", { name: /thumbnail/ })
    await user.hover(productThumbnail)
    await waitFor(() => {
      return expect(productThumbnail).toHaveAttribute(
        "data-src",
        getProductGridData().edges[1].node.childMarkdownRemark.frontmatter
          .galleryImages[0].childImageSharp.gatsbyImageData.images.fallback?.src
      )
    })
  })
  //handle unhover
  it("should display original thumbnail image when user unhovers", async () => {
    const user = userEvent.setup()
    const productThumbnail = screen.getByRole("img", { name: /thumbnail/ })
    await user.hover(productThumbnail)
    await user.unhover(productThumbnail)
    await waitFor(() => {

     expect(productThumbnail).toHaveAttribute(
        "data-src",
        getProductGridData().edges[1].node.childMarkdownRemark.frontmatter
          .thumbnail.childImageSharp.gatsbyImageData.images.fallback?.src
      )
    })
  })

  it("should not display sold out product has more than zero stock", () => {
    const soldout = screen.queryByText(/Sold Out/)
    expect(soldout).toBeNull()
  })
})

describe("sold out", () => {
  //mock data sold out product
  const { title, id, price, thumbnail, galleryImages } =
    getProductGridData().edges[0].node.childMarkdownRemark.frontmatter
  const { slug } = getProductGridData().edges[0].node.childMarkdownRemark.fields

  it("should display Sold Out if the product has zero stock", () => {
    render(
      <ProductThumbnail
        price={price}
        title={title}
        thumbnail={thumbnail}
        slug={slug}
        id={id}
        galleryImages={galleryImages}
      />
    )
    const soldout = screen.getByText(/Sold Out/)
    expect(soldout).toBeInTheDocument()
  })
})
