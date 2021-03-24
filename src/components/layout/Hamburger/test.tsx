import React from "react"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Hamburger from "."


describe("Hamburger component", ()=>{
    const open = true
    const setOpen = jest.fn()

    test("component tree matches snapshot", ()=>{
        const {container} = render(<Hamburger open = {open} setOpen ={setOpen}/>)
        expect(container.firstChild).toMatchSnapshot()
    })

    test("setOpen() is called when pressed", ()=>{
    
        render(<Hamburger open = {open} setOpen = {setOpen}/>)
        const button = screen.getByRole('button')
        fireEvent.click(button)
        expect(setOpen).toHaveBeenCalledTimes(1)
       
    })

})