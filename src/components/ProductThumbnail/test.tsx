import React from 'react'
import {render, screen} from "@testing-library/react"
import ProductThumbnail from "./index"
import {imageGalleryData} from "../../../__mocks__/mock-data"

const price = 0
const title = "Pietsie Atlin Blouse"

describe("Thumbnail Component", ()=>{
    //displays name
    //displays price

    test("price displays correctly", ()=>{
        render(<ProductThumbnail price = {0} title = {"Pietsie Atlin Blouse"} image = {imageGalleryData[0].node} slug = {"/"}></ProductThumbnail>)
        expect(screen.getByText(price.toString())).toBeInTheDocument()
        
    })

    
    test("name displays correctly", ()=>{
        render(<ProductThumbnail price= {0} title = {"Pietsie Atlin Blouse"} image = {imageGalleryData[0].node} slug = {"/"}></ProductThumbnail>)
        expect(screen.getByText(title)).toBeInTheDocument()
        
    })
})