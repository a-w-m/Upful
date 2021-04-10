import styled from "styled-components"

interface ButtonProps{
  "data-item-max-quantity": number
}

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  font-size: 1.4rem;
  background-color: var(--main-green);
  color: var(--link-text-color);
  line-height: 1.4rem;
  border: 0.8rem solid var(--main-green);
  width: 31rem;
  margin: 0 0 1.4rem;
  padding: 1.2rem 3.2rem;
  transition: all 0.15 ease;
  border-radius: 0.4rem;
  opacity: ${props=> props["data-item-max-quantity"] > 0 ? 1 : 0.3};
  user-select: ${props=> props["data-item-max-quantity"] > 0 ? "auto" : "none"};

  &:hover,
  &:focus,
  &:active {
    background-color: var(--pagination-link-hover);
    border-color: var(--pagination-link-hover);
    color: var(--link-text-color);
  }
`
