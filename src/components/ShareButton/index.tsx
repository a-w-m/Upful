import React from "react"
import { ShareIcon } from "../Icons/index"
import { Button, TextWrapper } from "./styled"

const ShareButton: React.FC<{}> = () => {
  return (
    <Button type="button">
      <ShareIcon></ShareIcon>
      <TextWrapper>Share This</TextWrapper>
    </Button>
  )
}

export default ShareButton
