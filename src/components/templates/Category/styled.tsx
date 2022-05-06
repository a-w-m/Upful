import styled from "styled-components"
import device from "../../Layout/mediaQuery"

export const CategoryHeading = styled.h1`
  font-size: var(--heading-font-size);
  font-family: var(--main-font-size);
  font-weight: 300;
  text-align: center;
  margin: 0 auto;
  padding: 1rem 1rem;
  text-transform: uppercase;
  @media ${device.laptop} {
    margin-top: 4rem;
    padding: 0;
  }
`

export const Container = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 2rem;

  @media ${device.laptop} {
    grid-gap: 4rem;
  }
`
