import React, { useEffect } from "react"

//hook to handle clicking outside the given component (RefObject)

const useOnClickOutside = (
  ref: React.RefObject<HTMLInputElement>,
  handler: (event: Event) => void
): void => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return
      }

      handler(event)
    }

    document.addEventListener("mousedown", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
    }
  }, [ref, handler])
}

export default useOnClickOutside
