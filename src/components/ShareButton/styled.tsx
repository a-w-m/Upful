import styled from 'styled-components'
import device from '../layout/mediaQuery'


export const ShareWrapper = styled.div``

export const Button = styled.button`
    display: flex;
    gap: 1rem;
    align-items: end;
    background: none;
    border: none;
    cursor: pointer;
    padding: 1.6rem;
`

export const TextWrapper = styled.span`
    font-size: 1.4rem;

    @media ${device.laptop}{
    font-size: 1.4rem;
    }
`