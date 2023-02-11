import { View, Text } from 'react-native'
import React from 'react'
import { Card, Info, Title } from './styles'
import { Notification } from '../../api/types'

export default function NotificationCard({title, description}: Notification) {
  return (
    <Card>
      <Title>{title}</Title>
      <Info>{description}</Info>
    </Card>
  )
}