import React, { useState, useRef } from "react"
import { ShareIcon } from "../Icons/index"
import { Button, TextWrapper, SocialsContainer } from "./styled"
import { Facebook, Twitter, Pinterest } from "../Icons/index"
import useOnClickOutside from "../../hooks/useOnClickOutside"

interface ShareButtonProps {
  title: string
  path: string
  imageURL: string
}

const ShareButton: React.FC<ShareButtonProps> = props => {
  const { title, path, imageURL } = props
  const ref = useRef(null)
  const [isOpen, setOpen] = useState(false)
  useOnClickOutside(ref, () => setOpen(false))

  return (
    <>
      <Button
        open={isOpen}
        type="button"
        onClick={() => {
          setOpen(true)
        }}
      >
        <ShareIcon />
        <TextWrapper>Share This</TextWrapper>
        <SocialsContainer ref={ref} open={isOpen}>
          <a
            href={`http://www.facebook.com/sharer.php?u=${path}`}
            target="_blank"
          >
            <Facebook />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${path}`}
            target="_blank"
          >
            <Twitter />
          </a>
          <a
            href={`http://pinterest.com/pin/create/button/?url=${path}&media=${imageURL}&description=${title}`}
            target="_blank"
          >
            <Pinterest />
          </a>
        </SocialsContainer>
      </Button>
    </>
  )
}

export default ShareButton
