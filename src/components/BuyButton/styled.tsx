import styled from 'styled-components'

export const Button = styled.button`
cursor: pointer;
font-size: 1.4rem;
background-color: #153325;
color: #fff;
line-height: 1.4rem;
border: .8rem solid #153325;
width: 31rem;
margin: 0 0 1.4rem;
padding: 1.2rem 3.2rem;
transition: all .15 ease;
border-radius: .4rem;


 &:hover, &:focus, &:active {
	background-color: #204b37;
	border-color: #204b37;
	color: #fff;
}



`