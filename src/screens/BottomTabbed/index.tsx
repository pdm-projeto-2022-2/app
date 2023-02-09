import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CriarLembrete from '../CriarLembrete';

export default function BottomTabbed() {

    const Tab = createBottomTabNavigator();


  return (
    <Tab.Navigator>
        <Tab.Screen name='CriarLembrete' component={CriarLembrete} />
    </Tab.Navigator>
  )
}