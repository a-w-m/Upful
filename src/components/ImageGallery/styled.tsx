import styled from "styled-components"
import device from "../layout/mediaQuery"
export const Wrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  @media ${device.laptop}{
    grid-area: gallery;
    justify-self: center;
    align-self: flex-start;
    
  }
`
export const UL = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  gap: 1.4rem;

  & > li {
    list-style: none;
    flex: 0 0 6.8rem;
    margin-bottom: 0;
  }
`
export const LI = styled.li``
