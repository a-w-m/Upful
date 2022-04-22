import CMS from "netlify-cms-app"
import collections from "./collections"

declare global {
  interface Window {
      CMS_MANUAL_INIT: boolean;
  }
}
window.CMS_MANUAL_INIT = true 
//declare netlify cms events
//supported events are prePublish, postPublish, preUnpublish, postUnpublish, preSave and postSave.

CMS.registerEventListener({
  name: "preSave",
  handler: ({ entry }) => {
    if (entry.get("collection") === "settings") {
      //assign variable to value of categories property
      let categories = entry.get("data").get("menuLinks").get("categories")

      //create a new array where each element now includes a slug property
      let addLinks = categories.map((ele:any) => {
        return ele.set("slug", `/${ele.get("name")}/`)
      })

      //set value of categories property to newly created array
      let update = entry
        .get("data")
        .get("menuLinks")
        .set("categories", addLinks)

      //update value of menuLinks and return entry
      return entry.get("data").set("menuLinks", update)
    } else {
      return
    }
  },
})

//manually initialize cms with config object

CMS.init({
  config: {
    backend: {
      name: "git-gateway",
      branch: "develop",
      commit_messages: {
        create: `CMS Create {{collection}} {{slug}}`,
        update: `CMS Update {{collection}} “{{slug}}”`,
        delete: `CMS Delete {{collection}} “{{slug}}”`,
        uploadMedia: `CMS Upload “{{path}}”`,
        deleteMedia: `CMS Delete “{{path}}”`,
        openAuthoring: `CMS Message '{{message}}'`,
      },
    },
    load_config_file: false,
    media_folder: "static/assets",
    public_folder: "/assets",
    collections: collections,
  },
})
