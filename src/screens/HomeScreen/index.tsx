import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NotificationListScreen from '../NotificationListScreen';
import AuthContext from '../../context/AuthContext';
import CriarAgendamentoScreen from '../CriarAgendamentoScreen';
import CriarNotificacaoScreen from '../CriarNotificacaoScreen';
import LocalizarDoadorScreen from '../LocalizarDoadorScreen';
import ListarAgendamentoScreen from '../ListarAgendamentosScreen';

export default function HomeScreen() {

    const {role} = useContext(AuthContext)

    const Tab = createBottomTabNavigator();


  return (
    <Tab.Navigator>
        {role === 'funcionario'?
        (<>
          <Tab.Screen name='CriarNotificacao' component={CriarNotificacaoScreen} />
          <Tab.Screen name='LocalizarDoador' component={LocalizarDoadorScreen} />
          <Tab.Screen name='ListarAgendamentos' component={ListarAgendamentoScreen}/>

        </>)
        :(<>
          <Tab.Screen name='Agendar' component={CriarAgendamentoScreen} />
          <Tab.Screen name='Notificações' component={NotificationListScreen} />
        </>)}
    </Tab.Navigator>
  )
}