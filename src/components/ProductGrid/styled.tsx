import styled from "styled-components"
import device from "../Layout/mediaQuery"

export const Container = styled.div`
  display: grid;
  width: auto;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  padding: 2rem 0;
  grid-gap: 2rem;
  justify-content: center;

@media ${device.laptop} {
  grid-template-columns: repeat(auto-fit, minmax(300px, .25fr));
  padding: 2rem 2rem;
}
`
