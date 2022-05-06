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
      thumbnail: P.Image
      galleryImages: P.Image[]
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

export interface MenuLinks {
  site: {
    siteMetadata: {
      menuLinks: {
        categories: Array<{ name: string; slug: string }>
      }
    }
  }
}
