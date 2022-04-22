import { pageDefaults } from "../fields/patterns"
import { CmsCollection } from "netlify-cms-core"

// declare Pages collection object

export const pages: CmsCollection = {
  label: "Pages",
  name: "pages",
  folder: "src/markdown/pages",
  path: "{{slug}}/index",
  create: true,

  label_singular: "Page",
  fields: [...pageDefaults],
}
