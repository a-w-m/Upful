import React from "react"

const TwitterIcon: React.FC<{}> = () => {
  return (
    <svg
      className="svg-icon icon-share-twitter "
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 17"
      aria-hidden = "true"
      focusable ="false"
      data-testid = "Twitter Icon"
    >
      <title>Share to Twitter</title>

      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.64 2.576a4.115 4.115 0 0 0 1.803-2.27c-.792.47-1.67.812-2.605.996a4.102 4.102 0 0 0-6.99 3.742A11.647 11.647 0 0 1 1.392.757 4.083 4.083 0 0 0 .837 2.82a4.1 4.1 0 0 0 1.825 3.413A4.086 4.086 0 0 1 .803 5.72v.052a4.105 4.105 0 0 0 3.29 4.022 4.108 4.108 0 0 1-1.852.07 4.106 4.106 0 0 0 3.832 2.85 8.231 8.231 0 0 1-5.094 1.755A8.33 8.33 0 0 1 0 14.412a11.612 11.612 0 0 0 6.289 1.843c7.545 0 11.671-6.25 11.671-11.672 0-.178-.004-.355-.011-.53a8.339 8.339 0 0 0 2.047-2.124 8.202 8.202 0 0 1-2.357.646h.001z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default TwitterIcon
