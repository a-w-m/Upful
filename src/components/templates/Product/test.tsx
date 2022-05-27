import React from "react"
//import custom render wrapped in providers
import { render, screen, within } from "src/utils/test/test-utils"
import userEvent from "@testing-library/user-event"
import Product from "./index"
import { getProductData } from "src/utils/test/data"
import { getSrc } from "gatsby-plugin-image"


const soldoutId = "easy-sweatpant-in-natural"

const { data } = getProductData()
describe("Product", () => {
  it("should match snapshot", ()=>{
    render(<Product data={data} />)
    const { container } =   render(<Product data={data} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("should render product navigation", () => {
    render(<Product data={data} />)
    const nav = screen.getByRole("navigation", { name: "Product" })
    expect(nav).toBeInTheDocument()
  })

  it("should have correct site navigation links", () => {
    render(<Product data={data} />)
    const nav = screen.getByRole("navigation", { name: "Product" })
    const home = within(nav).getByRole("link", { name: /home/i })
    const collection = within(nav).getByRole("link", {
      name: `${data.markdownRemark.parent.sourceInstanceName}`,
    })
    expect(home).toHaveAttribute("href", "/")
    expect(collection).toHaveAttribute(
      "href",
      `/${data.markdownRemark.parent.sourceInstanceName}`
    )
  })

  it("should render all gallery images", () => {
    render(<Product data={data} />)
    const gallery = screen.getAllByRole("img", { name: "gallery image" })
    expect(gallery).toHaveLength(
      data.markdownRemark.frontmatter.galleryImages.concat(
        data.markdownRemark.frontmatter.thumbnail
      ).length
    )
  })

  it("should render main image", () => {
    render(<Product data={data} />)
    const main = screen.getByRole("img", { name: "selected image" })
    expect(main).toBeInTheDocument()
  })

  it("should change main image to gallery image when user clicks gallery image", async () => {
    const user = userEvent.setup()
    render(<Product data={data} />)
    const main = screen.getByRole("img", { name: "selected image" })
    expect(main).toHaveAttribute(
      "data-src",
      `${data.markdownRemark.frontmatter.thumbnail.childImageSharp.gatsbyImageData.images.fallback?.src}`
    )
    const gallery = screen.getAllByRole("img", { name: "gallery image" })
    await user.click(gallery[1])
    expect(main).toHaveAttribute(
      "data-src",
      `${gallery[1].getAttribute("src")}`
    )
  })
  it("should render product title", () => {
    render(<Product data={data} />)
    const title = screen.getByRole("heading", {
      level: 1,
      name: data.markdownRemark.frontmatter.title,
    })
    expect(title).toBeInTheDocument()
  })
  it("should render price", () => {
    render(<Product data={data} />)
    const price = screen.getByText(
      `$${data.markdownRemark.frontmatter.price.toFixed(2)}`
    )
    expect(price).toBeInTheDocument()
  })
  it("should render description", () => {
    render(<Product data={data} />)
    const description = screen.getByLabelText("description")
    expect(description).toBeInTheDocument()
  })
  it("should render all custom options", () => {
    render(<Product data={data} />)
    const options = screen.getAllByRole("radio")
    expect(options).toHaveLength(
      data.markdownRemark.frontmatter.productOptions[0].options.length
    )
  })
  it("should display name of the option the user clicks", async () => {
    render(<Product data={data} />)
    const customField =
      data.markdownRemark.frontmatter.productOptions[0].customField
    const option =
      data.markdownRemark.frontmatter.productOptions[0].options[1].option
    const user = userEvent.setup()
    const selected = screen.getByLabelText("selected option")
    const radio = screen.getByRole("radio", {
      name: option,
    })
    await user.click(radio)
    expect(radio).toBeChecked()
    expect(selected).toHaveTextContent(`${customField} | ${option}`)
  })
  it("should render add to cart button", () => {
    render(<Product data={data} />)
    const button = screen.getByRole("button", { name: "Add to Cart" })
    expect(button).toBeInTheDocument()
  })

  it("should render email link", () => {
    render(<Product data={data} />)
    const link = screen.getByRole("link", { name: /email/ })
    expect(link).toBeInTheDocument()
  })

  it("should have correct email link", () => {
    render(<Product data={data} />)
    const link = screen.getByRole("link", { name: /email/ })
    expect(link).toHaveAttribute(
      "href",
      `mailto:howdy@upful.com?Subject=${data.markdownRemark.frontmatter.title}`
    )
  })

  it("should render share button", () => {
    render(<Product data={data} />)
    const button = screen.getByRole("button", { name: /Share Product/ })
    expect(button).toBeInTheDocument()
  })

  it("should display social media links when user clicks share button", async () => {
    const user = userEvent.setup()
    render(<Product data={data} />)
    const button = screen.getByRole("button", { name: /Share Product/ })
    const link = screen.queryAllByRole("link", { name: /share/i })
    expect(link).toEqual([])
    await user.click(button)
    const facebook = screen.getByRole("link", { name: /facebook/i })
    const twitter = screen.getByRole("link", { name: /twitter/i })
    const pinterest = screen.getByRole("link", { name: /pinterest/i })
    expect(facebook).toBeVisible()
    expect(twitter).toBeVisible()
    expect(pinterest).toBeVisible()
  })

  it("should have correct social media links when user clicks share button", async () => {
    const path = data.site.siteMetadata.url + data.markdownRemark.fields.slug

    const user = userEvent.setup()
    render(<Product data={data} />)
    const button = screen.getByRole("button", { name: /Share Product/ })
    await user.click(button)
    const facebook = screen.getByRole("link", { name: /facebook/i })
    const twitter = screen.getByRole("link", { name: /twitter/i })
    const pinterest = screen.getByRole("link", { name: /pinterest/i })
    expect(facebook).toHaveAttribute(
      "href",
      `http://www.facebook.com/sharer.php?u=${path}`
    )
    expect(twitter).toHaveAttribute(
      "href",
      `https://twitter.com/intent/tweet?url=${path}`
    )
    expect(pinterest).toHaveAttribute(
      "href",
      `http://pinterest.com/pin/create/button/?url=${path}&media=${
        data.site.siteMetadata.url
      }${getSrc(
        data.markdownRemark.frontmatter.thumbnail.childImageSharp
          .gatsbyImageData
      )}&description=${data.markdownRemark.frontmatter.title}`
    )
  })

  it("should hide links container when user clicks an outside node", async () => {
    render(<Product data={data} />)
    const user = userEvent.setup()
    const button = screen.getByRole("button", { name: /Share Product/ })
    await user.click(button)
    const link = screen.getByRole("link", { name: /facebook/i })
    expect(link).toBeVisible()
    await user.click(document.body)
    expect(link).not.toBeVisible()
  })

  it("should not hide links container when user clicks within component", async () => {
    render(<Product data={data} />)
    const user = userEvent.setup()
    const button = screen.getByRole("button", { name: /Share Product/ })
    await user.click(button)
    const link = screen.getByRole("link", { name: /facebook/i })
    await user.click(link)
    expect(link).toBeVisible()
  })

  it("should disable buy button if product is not in stock", () => {
    render(
      <Product
        data={{
          ...data,
          markdownRemark: {
            ...data.markdownRemark,
            frontmatter: {
              ...data.markdownRemark.frontmatter,
              id: soldoutId,
            },
          },
        }}
      />
    )

    const button = screen.getByRole("button", { name: /Sold Out/ })
    expect(button).toBeInTheDocument()
    expect(button).toBeDisabled()
  })

  it("should reflect the price change when the user clicks a custom option", async () => {
    const option =
      data.markdownRemark.frontmatter.productOptions[0].options[3].option
    const priceChange =
      data.markdownRemark.frontmatter.productOptions[0].options[3].priceChange
    render(<Product data={data} />)
    const user = userEvent.setup()
    const radio = screen.getByRole("radio", {
      name: option,
    })
    await user.click(radio)
    const price = screen.getByText(
      `$${(data.markdownRemark.frontmatter.price + priceChange).toFixed(2)}`
    )
    expect(price).toBeInTheDocument()
  })
})
