import * as F from "../fields"

export const folderCollectionDefaults = (
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

export const fileCollectionDefaults = (label: string, name: string) => {
  return { label, name }
}

export const productDefaults = [
  F.stringField("Title", "title"),
  F.dateTimeField("Date", "date"),
  F.stringField("Id", "id"),
  F.imageField("Thumbnail", "thumbnail", "images"),
  F.listField("Gallery", "gallery", F.imageField("Image", "image", "/images", false)),
  F.numberField("Price", "price"),
  F.markdownField("Description", "body"),
  F.booleanField("Featured", "featured", false),
  F.nestedListField("Product Options", "productOptions", [
    F.stringField("Custom Field", "customField"),
    F.nestedListField("Options", "options", [
      F.stringField("Option", "option"),
      F.numberField("Price Change", "priceChange"),
    ]),
  ], false),
]

export const pageDefaults = [
  F.stringField("Title", "title"),
  F.markdownField("Body", "body"),
  F.imageField("Image", "image", "images", false),
]

export const settingsDefaults = [
  F.stringField("Title", "title"),
  F.stringField("Description", "description"),
  F.stringField("Author", "author"),
  F.stringField("Url", "url"),
  F.listField("Keywords", "keywords", F.stringField("Keyword", "keyword")),
  F.nestedListField("Meta", "meta", [
    F.stringField("Name", "name"),
    F.stringField("Content", "content"),
  ]),
  F.imageField("Logo", "logo", "src/images/logo", false),
  F.imageField("Favicon", "favicon", "src/images/favicon", false),
  F.objectField(
    "MenuLinks",
    "menuLinks",
    [
      F.nestedListField(
        "Categories",
        "categories",
        [F.stringField("Name", "name", false), F.hiddenField("Slug", "slug")],
        false
      ),
    ],
    false
  ),
]
