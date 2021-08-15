import styled from "styled-components"
import device from "../layout/mediaQuery"

export const Container = styled.div`
  display: grid;
  width: auto;
  grid-auto-rows: auto;
  grid-template-columns: 1fr 1fr;
  padding: 2rem 0;
  grid-gap: 2.1rem;

@media ${device.laptop} {
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 2rem 2rem;
}
`
