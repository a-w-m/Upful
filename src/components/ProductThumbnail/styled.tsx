import styled from "styled-components"
import device from "../Layout/mediaQuery"
interface Props {
  stock: number
}

export const Article = styled.article`
  grid-column: span 2;
  /* @media ${device.tablet}{
    width: 400px;
  } */

  /* handle widow/orphan grid items: https://css-irl.info/controlling-leftover-grid-items/ */
  
  /* Dealing with single possible orphan on mobileS, M, L, 4 column grid */
  &:last-child:nth-child(2n-1){
    grid-column-end: -2;
    @media ${device.tablet}{
      grid-column-end: auto;
    }
  }


 /* Dealing with orphan grid items for tablet, laptop, and laptopL, 6 column grid */
 /* Dealing with 2 orphan items */

  &:last-child:nth-child(3n - 1) {
    @media ${device.tablet} {
      grid-column-end: -2;
    }
  }
  &:nth-last-child(2):nth-child(3n + 1) {
    @media ${device.tablet} {
      grid-column-end: 4;
    }
  }
  /* Dealing with single orphan */

  &:last-child:nth-child(3n - 2) {
    @media ${device.tablet} {
      grid-column-end: 5;
    }
  }
`
export const H3 = styled.h3`
  font-size: 1.5rem;
  line-height: 1.25;
  font-family: var(--main-font);
`
export const PriceWrapper = styled.div<Props>`
  font-size: 1.6rem;
  color: #000;
  opacity: 0.5;
  text-decoration: ${props => (props.stock > 0 ? "none" : "line-through")};
`

export const SoldOut = styled.span``

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.4rem;
`
