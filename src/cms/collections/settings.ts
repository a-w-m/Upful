import { fileCollectionDefaults, settingsDefaults } from "../fields/patterns"
import {CmsCollection} from 'netlify-cms-core'

export const settings:CmsCollection = {
  ...fileCollectionDefaults(
    "Settings",
    "settings"
  ),
  files: [{
      name: "settings",
      label: "Setttings",
      file: "src/markdown/meta/index.json",

      fields: [
        ...settingsDefaults
      ]},
    

    ],
    editor:{
      preview: false
    }

}
