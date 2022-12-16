import React from 'react'

import { ButtonContainer } from './styles'

function Button({title, variant}) {
  return (
    <ButtonContainer variant={variant}>
      {title}
    </ButtonContainer>
  )
}

export default Button
