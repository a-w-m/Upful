import React, { createContext, useContext } from "react"
import useSnipcartApi, { ApiData, Dispatch } from "../../hooks/useSnipcartApi"

// type custom Provider component to receive child nodes
type SnipcartApiProviderProps = {
  children: React.ReactNode
}

//create Context
const SnipcartApiContext = createContext<
  | {
      state: ApiData
      dispatch: Dispatch
    }
  | undefined
>(undefined)

//get Provider
const { Provider } = SnipcartApiContext

const SnipcartApiProvider = ({ children }: SnipcartApiProviderProps) => {
  const [state, dispatch] = useSnipcartApi(
    `/.netlify/functions/getProductQuantity`
  )

  console.log(state)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

const useInventory = () => {
  const context = useContext(SnipcartApiContext)
  if (context === undefined) {
    throw new Error("SnipcartApiProvider is missing")
  } else {
    return context.state
  }
}

const useSetInventory = () => {
  const context = useContext(SnipcartApiContext)
  if (context === undefined) {
    throw new Error("SnipcartApiProvider is missing")
  } else {
    return context.dispatch
  }
}

export { SnipcartApiProvider, useSetInventory, useInventory }
