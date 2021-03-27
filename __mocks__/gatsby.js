const React = require("react")
const gatsby = jest.requireActual("gatsby")

const author = "awm"
const title = "StoreFront"
const description = "Knick and Knacks"
const url = "http://localhost"
const keywords = []
const image = "image"

const mockDate = new Date("2019-04-07T10:20:30Z")

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) =>
      React.createElement("a", {
        ...rest,
        href: to,
      })
  ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn().mockReturnValue({
    site: {
      siteMetadata: {
        title,
        description,
        author,
        url,
        keywords,
        image,
      },
    },
  }),
  Date: jest.spyOn(global.Date, "now").mockImplementation(() => mockDate),
}
