import React  from 'react'
import styled from "styled-components"
import {Link} from "gatsby"

export const HeaderContainer = styled.header`
  
  margin-bottom: 1.45rem;
  display: flex;
  justify-content: space-between;
  grid-area: header
`

export const TitleWrapper = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`
export const LinkWrapper = styled.h1`
  margin: 0;
`

export const TitleLink = styled(props => <Link {...props}/>)`
 color: #000;
text-decoration: none;
`
