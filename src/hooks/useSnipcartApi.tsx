import React, { useState, useEffect } from "react"

/*generic function to make fetch requests to snipcart api:
  - functions takes an initial state matching the given type
*/

function useSnipcartApi<T>(
  initialState: T,
  initialUrl: string
): [T, boolean, boolean, React.Dispatch<React.SetStateAction<string>>] {
  const [url, setUrl] = useState(initialUrl)
  const [result, setResult] = useState(initialState)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

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
      setResult(data)
      setIsLoading(false)
    }
    fetchData().catch(() => {
      setIsError(true)
      setIsLoading(false)
    })
  }, [])

  return [result, isLoading, isError, setUrl]
}

export default useSnipcartApi
