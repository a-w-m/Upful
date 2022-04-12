import styled from "styled-components"
import device from "../../Layout/mediaQuery"
export { CategoryHeading } from "../Category/styled"

export const Container = styled.div`
  font-family: var(--main-font);
  font-size: var(--main-font-size);
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: .1fr 1fr;
  grid-auto-flow: row;
  grid-gap: 1rem;
  justify-items: center;

  @media ${device.laptop}{
    font-size: 1.6rem;
  }


`

export const Wrapper = styled.div`
  padding: 1rem 1rem;
  line-height: 1.5;
  letter-spacing: .0125rem;
  display: flex;
  flex-direction: column;
  padding-left: 2.5rem;

  @media ${device.laptop}{
    width: 50%;
  }

  
  & > h1 {
    font-size: var(--sub-heading-font-size)
  }
`


