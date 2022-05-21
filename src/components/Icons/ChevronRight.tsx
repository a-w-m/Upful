import React from "react"

const ChevronRight: React.FC<{}> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="currentColor"
      className="bi bi-chevron-right"
      viewBox="0 0 16 16"
      role = "img"
      aria-label = "next page icon"
    >
      <path
        fillRule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  )
}

export default ChevronRight
