import React from 'react'
import {render, screen} from "@testing-library/react"
import ProductThumbnail from "./index"
import {imageGalleryData} from "../../../__mocks__/mock-data"

const price = 0
const name = ""

describe("Thumbnail Component", ()=>{
    //displays name
    //displays price

    test("price displays correctly", ()=>{
        render(<ProductThumbnail price = {0} name = {"Pietsie Atlin Blouse"} image = {imageGalleryData[0].node}></ProductThumbnail>)
        expect(screen.getByText(price.toString())).toBeInTheDocument()
        
    })

    
    test("name displays correctly", ()=>{
        render(<ProductThumbnail price= {0} name = {"Pietsie Atlin Blouse"} image = {imageGalleryData[0].node}></ProductThumbnail>)
        expect(screen.getByText(name)).toBeInTheDocument()
        
    })
})