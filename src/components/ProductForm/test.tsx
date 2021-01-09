import React from "react"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Option from "./index"
import {pageQueryData} from "../../../__mocks__/mock-data"
const dispatchMock = jest.fn()
const customField = pageQueryData.data.markdownRemark.frontmatter.customField2 

beforeEach(()=>{

    if(customField)
    render(<Option customField = {customField} dispatch = {dispatchMock}></Option>)

    })

describe("Option Componenent", ()=>{

    test("matches snapshot", ()=>{
        if (customField){
        const {container} = render(<Option customField = {customField} dispatch ={dispatchMock}></Option>)
        expect(container.firstChild).toMatchSnapshot()
        }
    })

    
    test("dispatch is called when select element changes", ()=>{
        const select = screen.getByRole('combobox')
        fireEvent.change(select, {tareget:{value: "large"}})
        expect(dispatchMock).toHaveBeenCalledTimes(1)
    })
})