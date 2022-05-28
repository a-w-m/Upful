import { renderHook } from "@testing-library/react"
import { SnipcartApiProvider, useInventory, useSetInventory } from "."
import { getSnipcartApiData } from "src/utils/test/data"

describe("SnipcartApiProvider context hooks", () => {
  it("should provide Api state via useInventory hook", () => {
    const { result } = renderHook(() => useInventory(), {
      wrapper: SnipcartApiProvider,
    })
    expect(result.current).toEqual(getSnipcartApiData().state)
  })

  it("should provide dispatch function via useSetInventory hook", () => {
    const { result } = renderHook(() => useSetInventory(), {
      wrapper: SnipcartApiProvider,
    })
    expect(
      result.current({
        type: "SET_INVENTORY",
        data: getSnipcartApiData().state.inventory,
      })
    ).toEqual("TEST DISPATCH")
  })

  // it("should throw an error if SnipcartApiProvider is not wrapped around children", () => {
  //   renderHook(() =>
  //     expect(useInventory()).toThrowError("SnipcartApiProvider is missing")
  //   )

  //   renderHook(() =>
  //     expect(useSetInventory()).toThrowError("SnipcartApiProvider is missing")
  //   )
  // })
})
