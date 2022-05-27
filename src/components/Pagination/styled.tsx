import styled from "styled-components"
import device from "../Layout/mediaQuery"

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
    font-family: var(--main-font);
    text-decoration: none;
    justify-self: end;

    @media ${device.tablet} {
      font-size: 1.6rem;
    }
  }
  & > p {
    font-family: var(--main-font);
    font-size: 1.4rem;
    grid-area: num;

    @media ${device.tablet} {
      font-size: 1.6rem;
    }
  }

  & > a:last-child {
    grid-area: next;
    font-size: 1.4rem;
    font-family: var(--main-font);
    text-decoration: none;
    justify-self: start;

    @media ${device.tablet} {
      font-size: 1.6rem;
    }
  }

  & > a:hover,
  & > a:focus {
    color: var(--header-nav-link-hover);
  }
`
