/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from "react"
import { GatsbyBrowser } from "gatsby"
import { SnipcartApiProvider } from "./src/components/Provider"

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({element}) => {
  return <SnipcartApiProvider>{element}</SnipcartApiProvider>
}
