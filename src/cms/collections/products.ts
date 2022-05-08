import { productDefaults } from "../fields/patterns"
import { CmsCollection } from "netlify-cms-core"

// declare collection object

export const products: CmsCollection = {
  label: "Products",
  name: "products",
  folder: "src/markdown/products",
  create: true,
  label_singular: "Product",
  nested: {
    depth: 100,
  },
  fields: [...productDefaults],
  meta: { path: { widget: "string", label: "Path", index_file: "index" } },
}
