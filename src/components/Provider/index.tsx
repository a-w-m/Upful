import React, {createContext} from 'react'
import useSnipcartApi from "../../hooks/useSnipcartApi"

const initialContext = {stockArray: [{id: "", stock: 0}], isLoading: false}
export const Context = createContext(initialContext)


const Provider:React.FC<{}>= (props) =>{
const [stockArray, isLoading] = useSnipcartApi(initialContext.stockArray, `/.netlify/functions/getProductQuantity`)
    return(
        <Context.Provider value = {{stockArray, isLoading}}>
                {props.children}
        </Context.Provider>
    )
}

export default Provider