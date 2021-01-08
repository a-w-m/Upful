import {FluidObject} from "../../../node_modules/gatsby-image/index" 


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
  imageSelected: FluidObject
}

export type Dispatch = React.Dispatch<Action>

export type Action = ActionImage | ActionQuantity | ActionSize | ActionColor 

export interface ActionImage {
  type: "image" 
  payload: FluidObject
}

export interface ActionColor{
  type: "color" 
  payload: string
}


export interface ActionSize{
  type: "size" 
  payload: string
}


export interface ActionQuantity{
  type: "quantity"  
  payload: number
}



export interface Props {
  data: {
    markdownRemark: {
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
    }
    allFile:{
      edges: ImageNode[]
      } 
    }
  }



export interface Image{ 
    childImageSharp: {
      fluid: FluidObject
    }

  
}

export interface ImageNode{
  node:  Image
  
}

