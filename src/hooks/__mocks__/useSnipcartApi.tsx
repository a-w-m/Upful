import { getSnipcartApiData } from "../../utils/test/data"

const useSnipcartApi =  jest.fn().mockImplementation(() => {
    return [getSnipcartApiData().state, getSnipcartApiData().dispatch]
  })

export default useSnipcartApi
