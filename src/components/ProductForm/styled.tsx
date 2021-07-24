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
	width: 10rem;
	height: 4rem;
	justify-content: center;
	font-size: 1.4rem;
	align-items: center;
	display: flex;
	position: relative;
  border: .1rem solid rgb(235, 235, 235);

  &:focus,
  &:checked + label {
    background-color: var(--main-brown);
  } 
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: calc(100 * 0.75%);
  padding: 1.2rem 0;
  gap: 1rem;


`
