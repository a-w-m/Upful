import styled from "styled-components";
import device from "../mediaQuery";
import { Link } from "gatsby";

export const LogoLink = styled(Link)`
  width: 40%;

  @media ${device.tablet} {
    flex-basis: 10%;
  }
`