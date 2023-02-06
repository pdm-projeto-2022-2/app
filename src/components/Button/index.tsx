import React from 'react'
import { GestureResponderEvent, Text } from 'react-native'
import { StyledButton, TouchableText } from './styles'


interface ButtonProps{
    text: string
    onPress(event: GestureResponderEvent): void
}

export default function Button({text, onPress}:ButtonProps) {
  return (
    <StyledButton
        onPress={onPress}
    >
        <TouchableText>{text}</TouchableText>
    </StyledButton>
  )
}
