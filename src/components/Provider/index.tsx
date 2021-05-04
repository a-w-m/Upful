import React, {createContext} from 'react'
import useSnipcartApi from "../../hooks/useSnipcartApi"

interface ApiData {
    inventory: {
    [key: string]: {
        stock: number
    }
}
    isLoading: boolean
    isError: boolean

}

const initialContext:ApiData = {inventory: {"id": {stock: 0}}, isLoading: false, isError: false}
export const Context = createContext(initialContext)


const Provider:React.FC<{}>= (props) =>{
const [inventory, isLoading, isError] = useSnipcartApi(initialContext.inventory, `/.netlify/functions/getProductQuantity`)
    return(
        <Context.Provider value = {{inventory, isLoading, isError}}>
                {props.children}
        </Context.Provider>
    )
}

export default Provider