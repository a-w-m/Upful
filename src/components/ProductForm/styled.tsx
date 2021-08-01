import styled from "styled-components"
import device from "../layout/mediaQuery"


export const Input = styled.input.attrs({type: "radio"})`
	opacity: 0;
	position: absolute;

&:checked + label{
  background-color: var(--main-brown)
}


`

export const Label = styled.label`
	height: 4rem;
	justify-content: center;
	font-size: 1.4rem;
	align-items: center;
	display: flex;
	position: relative;
  border: .1rem solid rgb(235, 235, 235);
  flex: 0 0 30%;

  &:focus,
  &:checked + label {
    background-color: var(--main-brown);
  } 
`

export const Field = styled.span`
font-size: 1.4rem;
flex-basis: 100%;
`

export const Container = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  padding: 1.2rem 0;
  justify-content: space-around;
  row-gap: 1rem;
  margin: 0;

`
