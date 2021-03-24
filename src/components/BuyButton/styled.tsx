import styled from 'styled-components'

export const Button = styled.button`
cursor: pointer;
font-size: 1.4rem;
background-color: var(--main-green);
color: var(--link-text-color);
line-height: 1.4rem;
border: .8rem solid var(--main-green);
width: 31rem;
margin: 0 0 1.4rem;
padding: 1.2rem 3.2rem;
transition: all .15 ease;
border-radius: .4rem;


 &:hover, &:focus, &:active {
	background-color: var(--pagination-link-hover);
	border-color: var(--pagination-link-hover);
	color: var(--link-text-color);
}



`