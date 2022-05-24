import React from 'react'
import * as Styled from './Button.styles'
import Link from 'next/link'

const Button = ({ children, href, to, css, ...props }) => {




  return (
    <Styled.ButtonWrapper css={{ ...css }} >
      <Styled.Button >
        {children}
      </Styled.Button>
    </Styled.ButtonWrapper>
  )
}

export default Button
