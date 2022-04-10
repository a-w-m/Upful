import * as F from "../fields"

export const collectionDefaults = (
  label: string,
  name: string,
  folder: string,
  path: string,
  create: boolean
) => ({
  label,
  name,
  folder,
  path,
  create,
})

export const productDefaults = [
  F.stringField("Title", "title"),
  F.dateTimeField("Date", "date"),
  F.stringField("Id", "id"),
  F.imageField("Thumbnail", "thumbnail", "images"),
  F.listField("Gallery", "gallery", {
    label: "Image",
    name: "image",
    media_folder: "images",
  }),
  F.numberField("Price", "price"),
  F.markdownField("Description", "body"),
  F.booleanField("Featured", "featured"),
  F.nestedListField("Product Options", "productOptions", [
    F.stringField("Custom Field", "customField"),
    F.objectField("Options", "options", [
      F.stringField("Option", "option"),
      F.numberField("Price Change", "priceChange"),
    ]),
  ]),
]

export const pageDefaults = [
  F.stringField("Title", "title"),
  F.markdownField("Body", "body"),
  F.imageField("Image", "image", "images")
]
