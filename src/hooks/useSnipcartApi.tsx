import React, { useState, useEffect} from "react"

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
      try {
        const res = await fetch(url)
        const data = await res.json()
        setResult(data)
        setIsLoading(false)
      } catch (err) {
        setIsError(true)
        throw err
      }
    }
    fetchData()
  }, [])

  return [result, isLoading, isError, setUrl]
}

export default useSnipcartApi
