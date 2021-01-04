import React from 'react'
import {render} from '@testing-library/react'
import Product from "./index"

const data =   {
    markdownRemark: {
    frontmatter:{
      
      title: "",
      price: "",
      image: "",
      id: "",
      description: "",
      date: "",
      customField: {
        name: "",
        values: [ {name: "", priceChange: "" }]
      }
    }
  }
  }

describe("Item Component", ()=>{
    test("matches snapshot", ()=>{
        const {container} = render(<Product data = {data} pageContext = {{slug: ""}}/>)
        expect(container.firstChild).toMatchSnapshot()

    })
})