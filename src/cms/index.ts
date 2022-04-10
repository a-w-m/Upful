import CMS from "netlify-cms-app";
import collections from "./collections/"

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
      }
    },
    load_config_file: false,
    media_folder: "static/assets",
    public_folder: "/assets",
    collections: collections  },
})
