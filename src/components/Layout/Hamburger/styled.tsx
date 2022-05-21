import styled from "styled-components"
import device from "../mediaQuery"

export const Container = styled.div<{ open: boolean }>`
  display: flex;
  width: ${({ open }) => (open ? "100%" : "auto")};
  justify-content: ${({ open }) => (open ? "flex-end" : "flex-start")};
`

export const Button = styled.button<{ open: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  padding-bottom: 0.1rem;

  &:focus {
    outline: none;
  }

  span {
    width: 2.4rem;
    height: 0.2rem;
    background: #000;
    border-radius: 1rem;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 0.3rem;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(2rem)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media ${device.tablet} {
    display: none;
  }
`
