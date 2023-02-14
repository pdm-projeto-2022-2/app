import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ButtonView, Card, IconsView } from './styles'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export interface AgendamentoCardProps{
    name: string
    date: Date,
    status: string,
    onUpdate():void,
    onRemove():void
}

export default function AgendamentoCard({name, date, onRemove, onUpdate, status}:AgendamentoCardProps) {
  return (
    <Card>
        <Text>{name}</Text>
      <Text>{date.toLocaleString('pt-br')}</Text>
      <ButtonView>
        {status !== 'DONE'
        ?<TouchableOpacity  onPress={onUpdate}>
          <Ionicons name="checkmark-done" size={24} color="black" />
        </TouchableOpacity>
        :null}
        <IconsView>
          
        </IconsView>
        <TouchableOpacity onPress={onRemove}>
            <AntDesign name="delete" size={24} color="black" />
          </TouchableOpacity>
      </ButtonView>
    </Card>
  )
}