import styled from 'styled-components'

export const ProductContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: auto;
	width: auto;
	grid-gap: 2rem;
	align-items: center;
	justify-items: center;
`

export const TitleContainer = styled.section`
displaY: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
flex-wrap: wrap;

`

export const Title = styled.h1`
font-size: 2.2rem;
line-height: 3rem;
font-family: var(--main-font);
`
export const BasePrice = styled.div`
font-size: 1.5rem;
line-height: 2.25rem;
color:var(--secondary-color);
`

export const DescriptionWrapper = styled.section`
display: flex;
flex-direction: column;
align-items: flex-start;
`

export const DescriptionHeading =  styled.h2`
	font-size: 1.5rem;
	border-bottom: .1rem solid #dda;
	border-top: .1rem solid #dda;
	line-height: 2;
	width: 100%;
	font-family: var(--main-font);
	text-align: center;
	padding: 1.2rem 0;
`
export const DescriptionContents = styled.div`
font-size: 1.4rem;
`

