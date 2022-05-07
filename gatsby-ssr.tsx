/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import React from 'react'
import {GatsbySSR} from 'gatsby'
import { SnipcartApiProvider } from './src/components/Provider'

export const onRenderBody:GatsbySSR['onRenderBody'] = ({ setBodyAttributes }) => {
  setBodyAttributes({
    className: "snipcart-overwrite",
  })
}

export const wrapRootElement:GatsbySSR['wrapRootElement'] = ({element})=>{
  return <SnipcartApiProvider>{element}</SnipcartApiProvider>
}
