import React from "react"
import { render, screen, waitFor, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ShareButton from "."
import { getQueryMockData } from "src/utils/test/data"

const { siteMetadata } = getQueryMockData.getSiteQuery().site

beforeEach(() => {
  render(
    <ShareButton
      title={siteMetadata.title}
      path={siteMetadata.url}
      imageURL={siteMetadata.image}
    />
  )
})

describe("Before user clicks ShareButton", () => {
  it("should match snapshot", () => {
    const button = screen.getByRole("button", { name: /Share Product/ })
    expect(button).toMatchSnapshot()
  })
  it("should display button", () => {
    const button = screen.getByRole("button", { name: /Share Product/ })
    expect(button).toBeVisible()
  })

  it("should display share icon", () => {
    expect(screen.getByTestId(/Share Icon/)).toBeVisible()
  })

  it("should not display Facebook link", () => {
    const facebook = screen.queryByRole("link", { name: /Share to Facebook/ })
    expect(facebook).toBeNull()
  })

  it("should not display Twitter link", () => {
    const twitter = screen.queryByRole("link", { name: /Share to Twitter/ })
    expect(twitter).toBeNull()
  })

  it("should not display Pinterest link", () => {
    const pinterest = screen.queryByRole("link", { name: /Share to Pinterest/ })
    expect(pinterest).toBeNull()
  })
})

describe("After user clicks ShareButton", () => {
  it("should display Facebook link", async () => {
    const user = userEvent.setup()
    const button = screen.getByRole("button", { name: /Share Product/ })
    await user.click(button)
    const link = screen.getByRole("link", { name: /Share to Facebook/ })
    expect(link).toBeVisible()
  })

  it("should have correct Facebook url", async () => {
    const user = userEvent.setup()
    const button = screen.getByRole("button", { name: /Share Product/ })
    await user.click(button)
    const link = screen.getByRole("link", { name: /Share to Facebook/ })
    expect(link).toHaveAttribute(
      "href",
      `http://www.facebook.com/sharer.php?u=${siteMetadata.url}`
    )
  })

  it("should display Facebook icon", async () => {
    const user = userEvent.setup()
    const button = screen.getByRole("button", { name: /Share Product/ })
    await user.click(button)
    const link = screen.getByRole("link", { name: /Share to Facebook/ })
    expect(within(link).getByTestId(/Facebook Icon/)).toBeVisible()
  })

  it("should display Twitter link", async () => {
    const user = userEvent.setup()
    const button = screen.getByRole("button", { name: /Share Product/ })
    await user.click(button)
    const link = screen.getByRole("link", { name: /Share to Twitter/ })
    expect(link).toBeVisible()
  })

  it("should have correct Twitter url", async () => {
    const user = userEvent.setup()
    const button = screen.getByRole("button", { name: /Share Product/ })
    await user.click(button)
    const link = screen.getByRole("link", { name: /Share to Twitter/ })
    expect(link).toHaveAttribute(
      "href",
      `https://twitter.com/intent/tweet?url=${siteMetadata.url}`
    )
  })

  it("should display Twitter icon", async () => {
    const user = userEvent.setup()
    const button = screen.getByRole("button", { name: /Share Product/ })
    await user.click(button)
    const link = screen.getByRole("link", { name: /Share to Twitter/ })
    expect(within(link).getByTestId(/Twitter Icon/)).toBeVisible()
  })

  it("should display Pinterest link", async () => {
    const user = userEvent.setup()
    const button = screen.getByRole("button", { name: /Share Product/ })
    await user.click(button)
    const link = screen.getByRole("link", { name: /Share to Pinterest/ })
    expect(link).toBeVisible()
  })

  it("should have correct Pinterest url", async () => {
    const user = userEvent.setup()
    const button = screen.getByRole("button", { name: /Share Product/ })
    await user.click(button)
    const link = screen.getByRole("link", { name: /Share to Pinterest/ })
    expect(link).toHaveAttribute(
      "href",
      `http://pinterest.com/pin/create/button/?url=${siteMetadata.url}&media=${siteMetadata.image}&description=${siteMetadata.title}`
    )
  })

  it("should display Pinterest Icon", async () => {
    const user = userEvent.setup()
    const button = screen.getByRole("button", { name: /Share Product/ })
    await user.click(button)
    const link = screen.getByRole("link", { name: /Share to Pinterest/ })
    expect(within(link).getByTestId("Pinterest Icon")).toBeVisible()
  })

  it("should hide links container when user clicks an outside node", async () => {
    const user = userEvent.setup()
    const button = screen.getByRole("button", { name: /Share Product/ })
    await user.click(button)
    const link = screen.getByRole("link", { name: /Share to Facebook/ })
    expect(link).toBeVisible()
    await user.click(document.body)
    expect(link).not.toBeVisible()
  })

  it("should not hide links container when user clicks within component", async () => {
    const user = userEvent.setup()
    const button = screen.getByRole("button", { name: /Share Product/ })
    await user.click(button)
    const link = screen.getByRole("link", { name: /Share to Facebook/ })
    await user.click(link)
    expect(link).toBeVisible()
  })
})
