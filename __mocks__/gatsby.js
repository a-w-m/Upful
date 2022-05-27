const React = require("react")
const gatsby = jest.requireActual("gatsby")

const mockDate = new Date(Date.UTC(2022, 5))

const {getQueryMockData} = require("../src/utils/test/data")


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
    ...getQueryMockData.getAllMarkdownRemarkQuery(),
    ...getQueryMockData.getFileQuery(),
    ...getQueryMockData.getSiteQuery()
  }),
  Date: jest.spyOn(global.Date, "now").mockImplementation(() => mockDate)
}


