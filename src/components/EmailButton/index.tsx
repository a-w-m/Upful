import React from "react"
import { Email } from "../Icons/index"
import {TextWrapper, MailToLink } from "./styled"

interface EmailButtonProps {
  title: string
}

const EmailButton: React.FC<EmailButtonProps> = ({ title }) => {
  return (
    <MailToLink href={`mailto:howdy@upful.com?Subject=${title}`}>
      <Email />
      <TextWrapper>Email us about this product</TextWrapper>
    </MailToLink>
  )
}

export default EmailButton
