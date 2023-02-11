import { View, Text } from 'react-native'
import React from 'react'
import { ButtonView, Card, IconsView } from './styles'


export interface AgendamentoCardProps{
    name: string
    date: Date,
    onUpdate():void,
    onRemove():void
}

export default function AgendamentoCard({name, date, onRemove, onUpdate}:AgendamentoCardProps) {
  return (
    <Card>
        <Text>{name}</Text>
      <Text>{date.toLocaleString('pt-br')}</Text>
      <ButtonView>
        <IconsView>V</IconsView>
        <IconsView>X</IconsView>
      </ButtonView>
    </Card>
  )
}