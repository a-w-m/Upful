import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Container = styled.div`
    display: grid;
    grid-template-columns: auto 1fr 1fr;
    border: 1px solid black;
    text-align: center;
`

interface Props{
    currentPage: number
    numPages: number
    category: string
}


const Pagination:React.FC<Props> = (props)=>{
const {currentPage, numPages, category} = props

return(
<Container>
<Link style = {currentPage + 1 > numPages? {pointerEvents: "none"}: {}} to = {currentPage - 1 <=1 ? `/${category}/`:`/${category}/${currentPage - 1}/`}>← Prev</Link>
<p>Page {currentPage} of {numPages}</p>
<Link style = {currentPage + 1 > numPages? {pointerEvents: "none"}: {}} to = {currentPage + 1 > numPages? `/${category}/${currentPage}` :`/${category}/${currentPage + 1}/`}>→ Next</Link>

</Container>
)
}

export default Pagination