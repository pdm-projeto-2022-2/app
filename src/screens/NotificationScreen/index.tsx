import { View, Text, FlatList } from 'react-native'
import React from 'react'
import NotificationCard from '../../components/NotificationCard'
import { CardContainer } from './styles'

export default function NotificationScreen() {

    const mockup = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

  return (
    <>
        <CardContainer>
            <FlatList
                data={mockup}
                renderItem={item => (
                    <NotificationCard/>
                )}
            />
        </CardContainer>
        
    </>
  )
}