import React, { ReactElement, ReactNode } from "react"
import { render, RenderOptions } from "@testing-library/react"
import { SnipcartApiProvider } from "../../components/Provider"
import { SnipcartContext } from "gatsby-plugin-snipcart-advanced/context.js"
import { getSnipcartContextData } from "./data"

type AllProvidersProps = {
  children: ReactNode
}

//React Element constructor that returns all the providers used in project with mock data
const AllProviders: (props: AllProvidersProps) => ReactElement = (
  props: AllProvidersProps
): ReactElement => {
  return (
    <SnipcartApiProvider>
      <SnipcartContext.Provider value={{ state: getSnipcartContextData() }}>
        {props.children}
      </SnipcartContext.Provider>
    </SnipcartApiProvider>
  )
}

//SnipcartContext Provider
export const SnipcartContextProvider = ({ children }:AllProvidersProps) => {
  return (
    <SnipcartContext.Provider value={{ state: getSnipcartContextData() }}>
      {children}
    </SnipcartContext.Provider>
  )
}

//custom render function wrapped by Providers
const customRender = (ui: ReactElement, options?: RenderOptions) => {
  return render(ui, { wrapper: AllProviders, ...options })
}

//re-export everything from @testing-library/react
export * from "@testing-library/react"

//override render method
export { customRender as render }
