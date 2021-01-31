import {P} from './index'

export interface CategoryPage{
    data:{
    allFile:{
      edges: childMarkdownRemarkNode[]
    }
  }
  }
  
  export interface childMarkdownRemark{
    childMarkdownRemark:{
      frontmatter: {
        title: string
        price: number
        image: P.Image
      }
      fields:{
        slug: string
      }
    }
  }
  
  export interface childMarkdownRemarkNode{
    node: childMarkdownRemark
  }
  
  export interface Grid {
    edges:childMarkdownRemarkNode[]
  
  }
  