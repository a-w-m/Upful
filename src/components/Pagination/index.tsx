import React from "react"
import { Link } from "gatsby"
import { Container } from "./styled"

interface Props {
  currentPage: number
  numPages: number
  category: string
}

const Pagination: React.FC<Props> = props => {
  const { currentPage, numPages, category } = props
  const prevPage = currentPage - 1
  const nextPage = currentPage + 1

  return (
    <Container>
      {prevPage > 0 && (
        <Link
          to={prevPage <= 1 ? `/${category}/` : `/${category}/${prevPage}/`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule ="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </Link>
      )}
      <p>
        Page {currentPage} of {numPages}
      </p>
      {nextPage <= numPages && (
        <Link
          to={
            nextPage > numPages
              ? `/${category}/${currentPage}`
              : `/${category}/${nextPage}/`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </Link>
      )}
    </Container>
  )
}

export default Pagination
