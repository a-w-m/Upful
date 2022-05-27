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
          Previous
        </Link>
      )}
      <p>
        Page {currentPage} of {numPages}
      </p>
      {nextPage <= numPages && (
        <Link to={`/${category}/${nextPage}/`}>
          Next
        </Link>
      )}
    </Container>
  )
}

export default Pagination
