import React from "react"
import { render, screen } from "@testing-library/react"
import Nav from "./nav"


describe("Nav component", ()=>{
   
    

    test("component tree matches snapshot", ()=>{
        const open = false
        const {container} = render(<Nav open = {open}/>)
        expect(container.firstChild).toMatchSnapshot()
    })

    test("Nav is inaccessible (hidden) when open is false", ()=>{
        const open = false
        render(<Nav open = {false}/>)
        const navigation = screen.queryByRole('navigation', {hidden: true})
        expect(navigation).not.toBeVisible()

        
    })

    test("Nav is visible when open is true", ()=>{
        const open = true
        render(<Nav open = {true}/>)
        const navigation = screen.getByRole('navigation')
        expect(navigation).toBeVisible()
    })


})