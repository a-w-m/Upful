import styled from "styled-components";
import device from "../mediaQuery";
import { Link } from "gatsby";

export const LogoWrapper = styled.div`
  flex-basis: 10%;

  @media ${device.tablet} {
    flex-basis: 10%;
  }
`

export const LogoLink = styled(Link)`
  width: 50%;

  @media ${device.tablet} {
    flex-basis: 10%;
  }
`