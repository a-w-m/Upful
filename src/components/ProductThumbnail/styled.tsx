import styled from "styled-components"
interface Props{
  stock: number
}

export const Article = styled.article``
export const H3 = styled.h3`
  font-size: 1.5rem;
  line-height: 1.25;
  font-family: var(--main-font);
`
export const PriceWrapper = styled.div<Props>`
  font-size: 1.6rem;
  color: #000;
  opacity: 0.5;
  text-decoration: ${props=>props.stock>0 ? "none": "line-through"};
`

export const SoldOut = styled.span`
  
`

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.4rem;
`
