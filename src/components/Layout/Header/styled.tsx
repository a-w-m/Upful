import React from "react"
import styled from "styled-components"
import device from "../mediaQuery"
import { Link } from "gatsby"

export const HeaderContainer = styled.header`
  
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-end;

  @media ${device.laptop}{
    justify-content: flex-end;
    gap: 2rem;
    grid-area: header;

    /*remove logo from header at laptop width  */
    & > a:nth-child(2){
      display: none;
    }

  }
`

export const HamburgerNavContainer = styled.div<{open: boolean}>`
width: ${({open})=> open? "100%": "auto"};
align-self: flex-start;
@media ${device.laptop}{
  order: 1;
  flex-basis: 100%;
}

`

export const LogoContainer = styled.div`
  max-width: 960;
  flex-basis: 100%;
  display: flex;
  justify-content: center;
`

export const LogoWrapper = styled.div`
  flex-basis: 25%;

  @media ${device.laptop} {
    flex-basis: 15%;
  }
`

export const LinkWrapper = styled.h1`
  margin: 0;
  font-family: var(--main-font);
`

export const TitleLink = styled(props => <Link {...props} />)`
  color: #000;
  text-decoration: none;
`

export const CartContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: flex-start;
`
export const Checkout = styled.button`
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  line-height: 1.5;
  text-decoration: none;
  cursor: pointer;
  background-color: transparent;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  font-size: 1rem;
  color: #666;
  font-family: Open Sans, sans-serif;
  font-family: var(--fontFamily);
  font-weight: 700;
`

export const Count = styled.span`
  align-self: flex-end;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2rem;
`
