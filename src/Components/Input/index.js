import React from 'react'
import { IconContainer, InputContainer, InputText } from './styles'

function Input({icon, placeholder, type}) {
  return (
    <InputContainer>
        <IconContainer>
            {icon}
        </IconContainer>
        <InputText type={type} placeholder={placeholder}></InputText>
    </InputContainer>
  )
}

export default Input
