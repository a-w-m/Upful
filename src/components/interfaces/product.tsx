import { IGatsbyImageData } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"
import {PageProps} from "gatsby"

export interface CustomField {
  field: string
  values: Values[]
}

export interface Values {
  option: string
  priceChange: number
}

export interface State {
  customFieldSelected?: string
  quantitySelected?: number
  imageSelected: IGatsbyImageData
}

export type Dispatch = React.Dispatch<Action>

export type Action = ActionImage | ActionCustomField

export interface ActionImage {
  type: "image"
  payload: IGatsbyImageData
} 

export interface ActionCustomField {
  type: "customField"
  payload: string
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
    customField: CustomField | null
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
  id: string
  title: string
  price: number
  slug: string
  image: Image
}
