import React, { useEffect } from "react"

//hook to handle clicking outside the given component (RefObject)

const useOnClickOutside = (
  ref: React.RefObject<HTMLInputElement>,
  handler: (event: Event) => void
): void => {
  useEffect(() => {
    //trigger callback if the current ref exists and is not a parent node of the clicked component
    const listener = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        handler(event)
      }
    }

    //bind event handler to document
    document.addEventListener("mousedown", listener)

    //remove event handler when component unmounts
    return () => {
      document.removeEventListener("mousedown", listener)
    }
  }, [ref, handler])
}

export default useOnClickOutside
