import styled from "styled-components"
import device from "../Layout/mediaQuery"

export const Container = styled.div`
  display: grid;
  width: auto;
  grid-template-columns: repeat(4, 1fr);
  padding: 2rem 0;
  grid-gap: 2rem;
  justify-content: center;

  @media ${device.tablet} {
    grid-template-columns: repeat(6, 1fr);
    padding: 2rem 2rem;
  }
`
