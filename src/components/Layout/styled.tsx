import styled from "styled-components"
import device from "./mediaQuery"

export const Container = styled.div`
  position: relative;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "main"
    "footer";
  overflow: scroll;
  row-gap: 2rem;
  font-family: var(--main-font);
`

export const MainWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0rem 2rem;
  grid-area: main;
  @media ${device.laptop}{
    padding: 0 4rem;
  }
`

export const Main = styled.main``
