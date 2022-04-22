import * as F from "../fields"
import {CmsField} from 'netlify-cms-core'


// default fields for product entry
export const productDefaults: Array<CmsField> = [
  F.stringField("Title", "title"),
  F.dateTimeField("Date", "date"),
  F.hiddenField("Id", "id"),
  F.imageField("Featured Image", "thumbnail", "images"),
  F.listField(
    "Gallery",
    "galleryImages",
    F.imageField("Image", "image", "images", false)
  ),
  F.numberField("Price", "price"),
  F.markdownField("Description", "body"),
  F.booleanField("Featured Product?", "featured", false),
  F.nestedListField(
    "Product Options",
    "productOptions",
    [
      F.stringField("Custom Field", "customField"),
      F.nestedListField("Options", "options", [
        F.stringField("Option", "option"),
        F.numberField("Price Change", "priceChange"),
      ]),
    ],
    false
  ),
]

// default field for page entry
export const pageDefaults: Array<CmsField> = [
  F.stringField("Title", "title"),
  F.markdownField("Body", "body"),
  F.imageField("Image", "image", "images", false),
]

// default fields for settings entry
export const settingsDefaults: Array<CmsField> = [
  F.stringField("Title", "title"),
  F.stringField("Description", "description"),
  F.stringField("Author", "author"),
  F.stringField("Url", "url"),
  F.listField("Keywords", "keywords", F.stringField("Keyword", "keyword")),
  F.nestedListField("Meta", "meta", [
    F.stringField("Name", "name"),
    F.stringField("Content", "content"),
  ]),
  F.imageField("Logo", "logo", "/src/images/logo/", false),
  F.imageField("Favicon", "favicon", "/src/images/favicon/", false),
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
