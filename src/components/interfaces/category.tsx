import { P } from "./index"

export interface CategoryPage {
  data: {
    allFile: {
      edges: childMarkdownRemarkNode[]
    }
  }
  pageContext: {
    currentPage: number
    category: string
    limit: number
    skip: number
    numPages: number
  }
}

export interface childMarkdownRemark {
  childMarkdownRemark: {
    frontmatter: {
      id: string
      title: string
      price: number
      image: P.Image
    }
    fields: {
      slug: string
    }
  }
}

export interface childMarkdownRemarkNode {
  node: childMarkdownRemark
}

export interface Grid {
  edges: childMarkdownRemarkNode[]
}
