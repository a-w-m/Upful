import React from "react"
import { Link } from "gatsby"
import { Container } from "./styled"
import { ChevronLeft, ChevronRight } from "../Icons/index"

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
          <ChevronLeft />
        </Link>
      )}
      <p>
        Page {currentPage} of {numPages}
      </p>
      {nextPage <= numPages && (
        <Link to={`/${category}/${nextPage}/`}>
          <ChevronRight />
        </Link>
      )}
    </Container>
  )
}

export default Pagination
