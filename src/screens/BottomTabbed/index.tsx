import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CriarLembrete from '../CriarLembrete';
import NotificationScreen from '../NotificationScreen';

export default function BottomTabbed() {

    const Tab = createBottomTabNavigator();


  return (
    <Tab.Navigator>
        <Tab.Screen name='Agendar' component={CriarLembrete} />
        <Tab.Screen name='Notificações' component={NotificationScreen} />
    </Tab.Navigator>
  )
}