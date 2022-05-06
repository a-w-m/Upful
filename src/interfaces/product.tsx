import { IGatsbyImageData } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"
import {PageProps} from "gatsby"

export interface ProductOption {
  customField: string
  options: Options[]
}

export interface Options {
  option: string
  priceChange: number
}

export interface State {
  quantitySelected?: number
  imageSelected: IGatsbyImageData
  optionsSelected: {
    [name: string]: Options
  }  | null
}

export type Dispatch = React.Dispatch<Action>

export type Action = ActionImage | ActionCustomField

export interface ActionImage {
  type: "SET_IMAGE"
  payload: IGatsbyImageData
} 

export interface ActionCustomField {
  type: "SET_PRODUCT_OPTION"
  payload: {
    customField: string
    option: string
    priceChange: number
  }
}


export interface Index {
  data: {
    allMarkdownRemark: AllMarkdownRemark
  }
}

export interface Product extends PageProps {
  data: {
    markdownRemark: MarkdownRemark
    site: SiteMetaData
    }
}

export interface SiteMetaData {
  url: string
}
export interface MarkdownRemark {
  frontmatter: {
    title: string
    price: number
    thumbnail: Image
    id: string
    date: string
    galleryImages: Image[]
    productOptions: ProductOption[] 
  }
  fields: {
    slug: string
  }
  html: string
  parent: {
    sourceInstanceName: string
  }
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
  thumbnail: Image
  galleryImages: Image[]
}
