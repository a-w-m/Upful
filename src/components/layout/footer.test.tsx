import React from 'react'
import {render, screen} from '@testing-library/react'
import Footer from "./footer"


describe("Footer Component", ()=>{

    test("matches component", ()=>{
        const {container} = render(<Footer />)
        expect(container.firstElementChild).toMatchSnapshot()

    })

})