import styled from 'styled-components'
import device from '../layout/mediaQuery'


export const ShareWrapper = styled.div`
position:relative;
`

export const Button = styled.button<{open?: boolean}>`
    display: flex;
    justify-content: center;
    gap: 1.6rem;
    align-items: end;
    background: none;
    border: none;
    cursor: pointer;
    padding-top: 1.6rem;
    width: 100%;



    & > a{
        cursor: pointer;
        color: inherit;
        text-decoration: none;
    }
`

export const TextWrapper = styled.span`
    font-size: 1.4rem;

    @media ${device.laptop}{
    font-size: 1.4rem;
    }

`

export const SocialsContainer = styled.div<{open: boolean}>`
    display: flex;
    visibility: ${({open})=> open? "visible" : "hidden"};
    opacity: ${({open})=> open? "1" : "0"};
    pointer-events: ${({open})=> open? "auto" : "none"};
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0%;
    width: 100%;
    height: 50%;
    z-index: 11;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
    background-color: #fff;
    transition: 200ms linear; 

    & > a {
        color: inherit;
    }

    & > a:hover{
        color: var(--main-brown)
    }

    @media ${device.laptop}{
    }
    
`