import React from "react"
import { render } from "@testing-library/react"
import Helmet from "react-helmet"

import SEO from "."

const siteAuthor = "awm"
const siteTitle = "StoreFront"
const siteDescription = "Knick and Knacks"
const siteURL = "http://localhost"
const siteKeywords = ""
const siteImage = "image"

describe("SEO component", () => {
  test("matches snapshot", () => {
    const { container } = render(<SEO />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test("should render correct meta data for home page", () => {
    render(<SEO />)
    const helmet:any = Helmet.peek()

    expect(helmet.title).toBe(siteTitle)

    expect(helmet.metaTags).toEqual(
      expect.arrayContaining([
        {
          name: "canonical",
          content: siteURL,
        },
        {
          name: "description",
          content: siteDescription,
        },
        {
          name: "image",
          content: siteImage,
        },
        {
          name: "og:url",
          content: siteURL,
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:title",
          content: siteTitle,
        },
        {
          name: "og:description",
          content: siteDescription,
        },
        {
          name: "og:image",
          content: siteImage,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:creator",
          content: siteAuthor,
        },
        {
          name: "twitter:title",
          content: siteTitle,
        },
        {
          name: "twitter:description",
          content: siteDescription,
        },
        {
          name: "twitter:image",
          content: siteImage,
        },
        {
          name: "keywords",
          content: siteKeywords,
        },
      ])
    )
  })
})
