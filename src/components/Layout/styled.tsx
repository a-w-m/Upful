import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  padding: 2rem;
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
  padding-bottom: 6.4rem;
  grid-area: main;
`

export const Main = styled.main``
