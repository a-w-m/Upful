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
        aria-label="toggle navigation"
        aria-expanded={open? true: false}
        aria-controls = "menu"
        open={open}
      >
        <span />
        <span />
        <span />
      </Button>
    </Container>
  )
}

export default Hamburger
