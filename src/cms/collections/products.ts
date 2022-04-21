import { folderCollectionDefaults, productDefaults } from "../fields/patterns"
import {CmsCollection} from 'netlify-cms-core'

export const products:CmsCollection = {
  ...folderCollectionDefaults(
    "Products",
    "products",
    "src/markdown/products",
    "{{slug}}/index",
    true
  ),
  label_singular: "Product",
  nested: {
    depth:100
  },
  fields: [
    ...productDefaults
  ],
  meta: { path: { widget: 'string', label: 'Path', index_file: 'index' } }
}
