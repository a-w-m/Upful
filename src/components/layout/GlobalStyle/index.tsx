import {createGlobalStyle} from 'styled-components'
import {global} from "./styled"
import {snipcart} from '../../../snipcart/styled'


export const GlobalStyle = createGlobalStyle`
${global}
${snipcart}
`