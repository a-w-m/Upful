import styled from "styled-components"
import device from "../../layout/mediaQuery"

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  width: auto;
  grid-gap: 1rem;
  align-items: flex-start;
  justify-items: center;
  align-content: center;

  @media ${device.laptop} {
    display: grid;
    grid-gap: 1rem 2rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: .2fr .2fr .3fr 1fr .1fr;
    grid-template-areas:
      "image title"
      "image form"
      "image share"
      "image description"
      "gallery description";

    & > .gatsby-image-wrapper {
      grid-area: image;
    }
  }
`

export const ProductDetails = styled.div``

export const TitleContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  justify-self: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;

  @media ${device.laptop} {
    align-self: start;
    width: 100%;
    border-bottom: 0.1rem solid var(--border-color);
    padding: 1rem 1rem;
  }
`

export const Title = styled.h1`
  font-size: 3.6rem;
  line-height: 3rem;
  font-family: var(--main-font);
  letter-spacing: .1rem;
  font-weight: 500;
  margin: 0;

  @media ${device.laptop} {
    font-size: 3.2rem;
  }
`
export const BasePrice = styled.div`
  font-size: 2rem;
  line-height: 2.25rem;
  color: var(--secondary-color);
  padding: 1.5rem 0 0 0;

  @media ${device.laptop} {
    font-size: 1.8rem;
  }
`
export const ProductForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;

  @media ${device.laptop}{
    grid-area: form;
    height: 100%;
  }
`

export const DescriptionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media ${device.laptop} {
    grid-area:description;
  }
`

export const DescriptionHeading = styled.h2`
  font-weight: 300;
  font-size: 1.5rem;
  border-bottom: 0.1rem solid var(--border-color);
  border-top: 0.1rem solid var(--border-color);
  line-height: 2;
  width: 100%;
  font-family: var(--main-font);
  text-align: center;
  padding: 1.4rem 0;
  margin: 0;

  @media ${device.laptop}{
    font-size: 1.8rem;
    
  }
`
export const DescriptionContents = styled.div`
  font-size: 1.4rem;
  padding: 1.4rem .8rem;
  text-align: justify;

  @media ${device.laptop}{
    font-size: 1.6rem;
  }
`

export const ShareButtonWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  @media ${device.laptop}{
    grid-area: share;
    align-self: end;
  }
`