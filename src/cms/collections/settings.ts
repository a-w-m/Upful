import { settingsDefaults } from "../fields/patterns"
import { CmsCollection } from "netlify-cms-core"

// declare Settings collection object

export const settings: CmsCollection = {
  label: "Settings",
  name: "settings",
  files: [
    {
      name: "settings",
      label: "Setttings",
      file: "src/markdown/meta/index.json",

      fields: [...settingsDefaults],
    },
  ],
  editor: {
    preview: false,
  },
}
