import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NotificationListScreen from '../NotificationListScreen';
import AuthContext from '../../context/AuthContext';
import CriarAgendamentoScreen from '../CriarAgendamentoScreen';
import CriarNotificacaoScreen from '../CriarNotificacaoScreen';
import LocalizarDoadorScreen from '../LocalizarDoadorScreen';
import ListarAgendamentoScreen from '../ListarAgendamentosScreen';
import MeusAgendamentosScreen from '../MeusAgendamentosScreen';
import ProfileHeader from '../../components/ProfileHeader';

export default function HomeScreen() {

    const {role} = useContext(AuthContext)

    const Tab = createBottomTabNavigator();


  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: (props) => <ProfileHeader/>,
        headerStyle: {height: 125},
        tabBarIcon: () => <></>,
        tabBarLabelStyle: {fontSize: 15}
      }}
    >
        {role === 'funcionario'?
        (<>
          <Tab.Screen 
            name='CriarNotificacao' component={CriarNotificacaoScreen}
            options={{tabBarLabel: "Notificação"}} 
          />
          <Tab.Screen name='LocalizarDoador' component={LocalizarDoadorScreen} 
            options={{tabBarLabel: "Doadores"}}
          />
          <Tab.Screen name='ListarAgendamentos' component={ListarAgendamentoScreen}
            options={{tabBarLabel: "Agendamento"}}
          />

        </>)
        :(<>
          <Tab.Screen name='Agendar' component={CriarAgendamentoScreen} />
          <Tab.Screen name='Notificações' component={NotificationListScreen} />
          <Tab.Screen name='MeusAgendamentos' component={MeusAgendamentosScreen} options={{
            tabBarLabel: "Agendamentos",
            unmountOnBlur: true}}/>
        </>)}
    </Tab.Navigator>
  )
}