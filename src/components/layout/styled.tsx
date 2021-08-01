import styled from "styled-components"

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
  font-family: var(--main-font);
`

export const MainWrapper = styled.div`
  margin: 0 auto;
  width: auto;
  padding: 2rem 2rem 6.4rem 2rem;
  grid-area: main;
`

export const Main = styled.main``
