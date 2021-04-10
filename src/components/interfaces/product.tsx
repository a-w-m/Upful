import { IGatsbyImageData } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"
import {PageProps} from "gatsby"

export interface CustomField {
  name: "size" | "color"
  values: Values[]
}

export interface Values {
  name: string
  priceChange: number
}

export interface State {
  customFieldSelected1?: string
  customFieldSelected2?: string
  quantitySelected?: number
  imageSelected: IGatsbyImageData
}

export type Dispatch = React.Dispatch<Action>

export type Action = ActionImage | ActionQuantity | ActionSize | ActionColor 

export interface ActionImage {
  type: "image"
  payload: IGatsbyImageData
}

export interface ActionColor {
  type: "color"
  payload: string
}

export interface ActionSize {
  type: "size"
  payload: string
}

export interface ActionQuantity {
  type: "quantity"
  payload: number
}

export interface Index {
  data: {
    allMarkdownRemark: AllMarkdownRemark
  }
}

export interface Product extends PageProps {
  data: {
    markdownRemark: MarkdownRemark
    allFile: AllImageFiles
  }
}

export interface MarkdownRemark {
  frontmatter: {
    title: string
    price: number
    image: Image
    id: string
    description: string
    date: string
    customField1: CustomField | null
    customField2: CustomField | null
  }
  fields: {
    slug: string
  }
  html: string
}

export interface AllMarkdownRemark {
  edges: MarkdownNode[]
}

export interface MarkdownNode {
  node: MarkdownRemark
}

export interface Image {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}

export interface ImageNode {
  node: Image
}

export interface AllImageFiles {
  edges: ImageNode[]
}

export interface Thumbnail {
  title: string
  price: number
  slug: string
  image: Image
}
