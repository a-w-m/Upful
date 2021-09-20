import styled from "styled-components";
import device from "../Layout/mediaQuery"
export const Wrapper = styled.nav`
display: flex;
gap: 1rem;
font-size: 1rem;
justify-content: flex-start;
align-items: end;
width: 100%;
height: 1.8rem;


@media ${device.laptop}{
    grid-area: nav;
}

& > a{
    font-size: 1rem;
    text-decoration: none;
    color: var(--main-color);
    text-transform: uppercase;
}
& >a:hover
{
        color: var(--header-nav-link-hover)
    }




& > svg{
    height:1.2rem;
    width: .8rem;
}

& > span {

    text-transform: uppercase;
    vertical-align:baseline;

}

`