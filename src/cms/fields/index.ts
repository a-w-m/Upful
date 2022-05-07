import { CmsField } from "netlify-cms-core"

type ChooseURL = {
  choose_url: boolean
}

type CmsImageField = CmsField & ChooseURL

export const dateTimeField = (
  label: string,
  name: string,
  required = true
): CmsField => {
  return {
    label,
    name,
    widget: "datetime",
    required,
  }
}

export const numberField = (
  label: string,
  name: string,
  required = true
): CmsField => {
  return {
    label,
    name,
    widget: "number",
    required,
  }
}
export const textField = (
  label: string,
  name: string,
  required = true
): CmsField => {
  return {
    label,
    name,
    widget: "text",
    required,
  }
}

export const markdownField = (
  label: string,
  name: string,
  required = true
): CmsField => {
  return {
    label,
    name,
    widget: "markdown",
    required,
  }
}

export const stringField = (
  label: string,
  name: string,
  required = true
): CmsField => {
  return {
    label,
    name,
    widget: "string",
    required,
  }
}

export const listField = (
  label: string,
  name: string,
  field: CmsField,
  required = true
): CmsField => {
  return {
    label,
    name,
    widget: "list",
    field,
    default: [],
    required,
  }
}

export const nestedListField = (
  label: string,
  name: string,
  fields: Array<CmsField>,
  required = true
): CmsField => {
  return {
    label,
    name,
    widget: "list",
    fields,
    default: [],
    required,
  }
}

export const objectField = (
  label: string,
  name: string,
  fields: Array<CmsField>,
  required = true
): CmsField => {
  return {
    label,
    name,
    widget: "object",
    fields,
    required,
  }
}

export const imageField = (
  label: string,
  name: string,
  media_folder: string,
  required = true
): CmsImageField => {
  return {
    label,
    name,
    widget: "image",
    media_folder,
    choose_url: false,
    required,
    config: {},
  }
}

export const booleanField = (
  label: string,
  name: string,
  required = true
): CmsField => {
  return {
    label,
    name,
    widget: "boolean",
    default: false,
    required,
  }
}

export const hiddenField = (label: string, name: string): CmsField => {
  return {
    label,
    name,
    widget: "hidden",
  }
}
