import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NotificationListScreen from '../NotificationListScreen';
import AuthContext from '../../context/AuthContext';
import CriarLembreteScreen from '../CriarLembreteScreen';
import CriarNotificacaoScreen from '../CriarNotificacaoScreen';

export default function HomeScreen() {

    const {role} = useContext(AuthContext)

    const Tab = createBottomTabNavigator();


  return (
    <Tab.Navigator>
        {role === 'funcionario'?
        (
          <Tab.Screen name='CriarNotificacao' component={CriarNotificacaoScreen} />
        )
        :(<>
          <Tab.Screen name='Agendar' component={CriarLembreteScreen} />
          <Tab.Screen name='Notificações' component={NotificationListScreen} />
        </>)}
    </Tab.Navigator>
  )
}