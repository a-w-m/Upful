import styled from "styled-components"
import device from "../mediaQuery"

export const FooterContainer = styled.footer`
  grid-area: footer;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  background-color: #153325;
  padding: 0.5rem;

  & > nav {
    margin: 0.5rem;
  }

  & > div {
    margin: 0.5rem;
  }

  @media ${device.laptop}{
    background: var(--main-brown);
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  a {
    font-size: 1.2rem;
    text-decoration: none;
    line-height: 2.1rem;
    color: var(--link-text-color);


  }



  @media ${device.laptop}{
    flex-direction: row;
    flex-basis: 100%; 
    flex-shrink: 0;
    gap: 2rem;
  }
`

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TermsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    font-size: 1.2rem;
    color: var(--link-text-color);
    text-decoration: none;
    line-height: 1rem;
  }
`

export const CopyrightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: var(--link-text-color);
`

export const Heading = styled.h5`
  color: #fff;
  font-size: 1.5rem;
`
export const Address = styled.address`
  text-align: center;
  color: var(--link-text-color);
  font-style: normal;
  line-height: 2.1rem;

  a {
    text-decoration: underline;
      color: var(--link-text-color);
  }

  @media ${device.laptop}{
    flex-basis: 100%; 
  }
`
