import { ApiData } from "../../../hooks/useSnipcartApi"

const getSnipcartContextData: () => {
  ready: boolean
  userStatus: string
  cartQuantity: number
  cartTotal: number
  cartSubtotal: number
} = () => ({
  ready: false,
  userStatus: "SignedOut",
  cartQuantity: 0,
  cartTotal: 0,
  cartSubtotal: 0,
})

const getSnipcartApiData: () => {
  state: ApiData
  dispatch: jest.Mock
} = () => ({
  state: {
    error: false,
    loading: true,
    inventory: {},
  },
  dispatch: jest.fn(),
})

export { getSnipcartApiData, getSnipcartContextData }
