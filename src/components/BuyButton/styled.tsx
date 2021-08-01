import styled from "styled-components"
import device from "../layout/mediaQuery"

interface ButtonProps{
  "data-item-max-quantity"?: number
}

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: .1rem;
  background-color: var(--main-bg);
  color: var(--header-nav-link-hover);
  line-height: 1.4rem;
  border: 0.1rem solid var(--main-brown);
  padding: 1.5rem 3.2rem;
  transition: all 0.15 ease;
  border-radius: 0rem;
  opacity: ${props=> props["data-item-max-quantity"]=== undefined || props["data-item-max-quantity"] > 0 ? 1 : 0.3};
  user-select: ${props=> props["data-item-max-quantity"]=== undefined || props["data-item-max-quantity"] > 0 ?"auto" : "none"};
  width: 100%;
  text-transform: uppercase;


 @media ${device.laptop}{
   margin-bottom: 0;
 }
 
`
