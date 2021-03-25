import {createGlobalStyle} from 'styled-components'
import {globalCSS} from "./styled"
import {snipcart} from '../../../snipcart/styled'


export const GlobalStyle = createGlobalStyle`
${globalCSS}
${snipcart}
`