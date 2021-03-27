import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  text-align: center;
  grid-area: auto/1/auto/-1;
  grid-template-areas: "prev num next";
  padding: 2rem 1rem;

  & > a:first-child {
    grid-area: prev;
    font-size: 1.4rem;
    justify-self: start;
    color: var(--secondary-color);
    text-decoration: none;
    transition: all 0.2s ease;
    justify-self: end;
  }
  & > p {
    font-family: var(--main-font);
    font-size: 1.4rem;
    grid-area: num;
  }

  & > a:last-child {
    grid-area: next;
    font-size: 1.4rem;
    justify-self: end;
    color: var(--secondary-color);
    text-decoration: none;
    transition: all 0.2s ease;
    justify-self: start;
  }

  & > a:hover {
    color: var(--pagination-link-hover);
  }
`
