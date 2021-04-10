import React, { useState, useEffect } from "react"

function useSnipcartApi<T>(
  initialState: T,
  initialUrl: string
): [T, boolean, React.Dispatch<React.SetStateAction<string>>] {
  const [url, setUrl] = useState(initialUrl)
  const [result, setResult] = useState(initialState)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        const res = await fetch(url)
        const data = await res.json()
        setResult(data)
        setIsLoading(false)
      } catch (err) {
        throw err
      }
    }
    fetchData()
  }, [])

  return [result, isLoading, setUrl]
}

export default useSnipcartApi
