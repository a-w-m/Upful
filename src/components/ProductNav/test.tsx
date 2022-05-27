import React from 'react'
import {getAllByRole, render, screen} from "@testing-library/react"
import ProductNav from "."

describe("ProductNav", ()=>{

    beforeEach(()=>{
        render(<ProductNav {...mockData}/>)
    })
    //snapshot
    it("should match snapshot", ()=>{
       const container =  screen.getByRole('navigation')
       expect(container).toMatchSnapshot()
    })
    it("should link to home page",()=>{
    const home = screen.getByRole('link', {name: /home/i})
    expect(home).toHaveAttribute('href', '/')
    })

    it("should link to collection", ()=>{
        const collection = screen.getByRole('link', {name: `${mockData.collection}`})
        expect(collection).toHaveAttribute('href', `/${mockData.collection}`)
    })

    it("should display title", ()=>{
        const title = screen.getByText(`${mockData.title}`)
        expect(title).toBeInTheDocument()
    })
    
    it ("should display two right chevrons", ()=>{
        const chevrons = screen.getAllByRole('img', {hidden: true})
        expect(chevrons).toHaveLength(2)
    })
})

const mockData = {
    title: 'Product',
    collection: 'Test'
}