import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
    'header' 
    'main' 
    'footer';
    overflow: scroll;
`

export const MainWrapper = styled.div`
margin: 0 auto;
max-width: 960;
padding: 1.5rem .5rem 1rem .5rem;
grid-area: main

`

export const Main = styled.main`

`