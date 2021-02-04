import React from 'react'
import {render, screen} from '@testing-library/react'
import Category from './index'
import {CategoryPageContext, CategoryPageContextWithPagination} from "../../../../__mocks__/mock-data"

describe("Category component", ()=>{
    test("matches snapshot", ()=>{
        const {container} = render(<Category {...CategoryPageContext}></Category>)
        expect(container.firstChild).toMatchSnapshot()
    })

    test("category heading", ()=>{
        render(<Category {...CategoryPageContext}></Category>)
        const heading = screen.getByText(CategoryPageContext.pageContext.category)
        expect(heading).toBeInTheDocument()
    })

    test("pagination does not render with single page", ()=>{
        render(<Category {...CategoryPageContext}></Category>)
        const pagination = screen.queryByText("/Page/")
        expect(pagination).toBeNull()
    })

    test("pagination renders with multiple pages", ()=>{
        render(<Category {...CategoryPageContextWithPagination}></Category>)
        const pagination = screen.getByText("Page 1 of 10")
        expect(pagination).toBeInTheDocument
    })
})