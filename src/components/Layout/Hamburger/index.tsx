import React, { SetStateAction, Dispatch } from "react"
import { Container, Button } from "./styled"

interface HamburgerProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const Hamburger: React.FC<HamburgerProps> = props => {
  const { open, setOpen } = props

  return (
    <Container open={open} onClick={() => setOpen(prev => !prev)}>
      <Button
        type="button"
        aria-label="open navigation"
        aria-controls="link-list"
        aria-expanded="false"
        open={open}
      >
        <div />
        <div />
        <div />
      </Button>
    </Container>
  )
}

export default Hamburger
