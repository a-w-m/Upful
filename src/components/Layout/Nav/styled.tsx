import styled from "styled-components"
import device from "../mediaQuery"
import { Link } from "gatsby"

export const Menu = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f4f4f4;
  height: 100vh;
  width: 100%;
  text-align: left;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  //hiding slide-out-navigation to prevent focus from keyboards or screen readers
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  z-index: 9;

  @media ${device.laptop} {
    flex-direction: row;
    align-items: center;
    position: static;
    height: 2rem;
    transform: none;
    visibility: visible;
    background: none;
    gap: 2rem;
    width: 100%;
  }

  /*Remove logo from hamburger menu*/
  & > a:nth-child(1) {
    display: none;
    @media ${device.laptop} {
      display: block;
    }
  }
`

export const NavLink = styled(Link)`
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  padding-left: 2rem;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: #000;
  text-decoration: none;
  transition: color 0.3s linear;

  @media ${device.laptop} {
    font-size: 1.7rem;
    font-weight: 400;
  }
  &:hover {
    color: var(--header-nav-link-hover);
  }
`
