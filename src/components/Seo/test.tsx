import React from "react"
import { render, waitFor } from "@testing-library/react"
import Helmet from "react-helmet"

import SEO from "."
import { getQueryMockData } from "src/utils/test/data"

const { siteMetadata } = getQueryMockData.getSiteQuery().site

describe("SEO", () => {
  beforeEach(() => {
    render(<SEO />)
  })

  it("should have site title", async () => {
    await waitFor(() => {
      expect(document.title).toBe(siteMetadata.title)
    })
  })

  it("should contain meta tags", async () => {
    const helmet = Helmet.peek()
    const metaTags = helmet.metaTags

    await waitFor(() => {
      const tags = document.querySelectorAll("meta")
      expect(tags).toHaveLength(metaTags.length)
    })
  })

  it("should contain link tags", async () => {
    const helmet = Helmet.peek()
    const linkTags = helmet.linkTags

    await waitFor(() => {
      const tags = document.querySelectorAll("link")
      expect(tags).toHaveLength(linkTags.length)
    })
  })

  it("should contain html attributes", async () => {
    const helmet = Helmet.peek()
    const attributes = helmet.htmlAttributes

    await waitFor(() => {
      const html = document.querySelector("html")
      expect(html).toHaveAttribute("lang", attributes?.lang)
    })
  })
})
