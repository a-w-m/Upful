import { collectionDefaults, pageDefaults } from "../fields/patterns"
import {CmsCollection} from 'netlify-cms-core'

export const pages:CmsCollection = {
  ...collectionDefaults(
    "Pages",
    "pages",
    "src/markdown/pages",
    "{{slug}}/index",
    true
  ),
  label_singular: "Page",
  fields: [
    ...pageDefaults
  ],
}