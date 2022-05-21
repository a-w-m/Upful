import React from "react"
import {render, screen} from "@testing-library/react"
import Logo from "."

describe("Logo", ()=>{
    
    it("should match snapshot", ()=>{
        render(<Logo/>)
        const container = screen.getByRole("link")
        expect(container).toMatchSnapshot()
    })

    it("should display image", ()=>{
        render(<Logo/>)
        const image = screen.getByRole('img')
        expect(image).toBeInTheDocument()
    })
})