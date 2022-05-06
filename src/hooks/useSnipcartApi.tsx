import React, { useState, useEffect, useReducer } from "react"
import { useInventory } from "../components/Provider"

/*generic function to make fetch requests to snipcart api:
  - functions takes an initial state matching the given type
*/
export interface ApiData {
  inventory: {
    [key: string]: {
      stock: number
    }
  }
  loading: boolean
  error: boolean
}

// type setter function
export type Dispatch = React.Dispatch<Action>

export type Action =
  | {
      type: "SET_LOADING"
    }
  | { type: "SET_ERROR" }
  | { type: "SET_INVENTORY"; data: ApiData["inventory"] }

function reducer(state: ApiData, action: Action): ApiData {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, error: false, loading: true }
    case "SET_ERROR":
      return { ...state, error: true, loading: false }
    case "SET_INVENTORY":
      return { ...state, error: false, loading: false, inventory:{...state.inventory, ...action.data}}
    default:
      throw new Error()
  }
}

const initialState: ApiData = {
  error: false,
  loading: true,
  inventory: {},
}

function useSnipcartApi(
url:string): [ApiData, Dispatch] {
  const [state, dispatch] = useReducer(reducer, initialState)


  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })

      if (!res.ok) {
        const err = new Error(`An error has occurred: ${res.status}`)
        throw err
      }

      const data = await res.json()
      dispatch({type: 'SET_INVENTORY', data: data})
      dispatch({type: 'SET_LOADING'})
    }
    fetchData().catch(() => {
      dispatch({type: 'SET_ERROR'})
    })
  }, [])

  return [state, dispatch]

}

export default useSnipcartApi
