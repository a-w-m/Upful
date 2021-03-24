import styled from 'styled-components'


export const Menu = styled.nav<{open: boolean}>`
display: flex;
flex-direction: column;
justify-content: center;
background: #f4f4f4;
height: 100vh;
text-align: left;
padding: 2rem;
position: absolute;
top: 0;
left: 0;
transition: transform 0.3s ease-in-out;
transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
//hiding slide-out-navigation to prevent focus from keyboards or screen readers
visibility: ${({open}) => open ? 'visible' : 'hidden'};
z-index: 9;

a{
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #000;
    text-decoration: none; 
    transition: color 0.3s linear;

}

&:hover{
    color: #956
}
`