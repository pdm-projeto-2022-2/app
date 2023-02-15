import { View, Text, FlatList, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import NotificationCard from '../../components/NotificationCard'
import { CardContainer } from './styles'
import { Doador, Notification } from '../../api/types'
import { listarNotificacoes } from '../../api/notificacao'
import AuthContext from '../../context/AuthContext'

export default function NotificationListScreen() {

    const [notifications, setNotifications] = useState<Notification[]>([])
    const {details} = useContext(AuthContext)

    function instanceOfDoador(object: any): object is Doador {
      return 'bloodType' in object;
    }

    async function loadNotifications(){
      if(instanceOfDoador(details.DETAILS)){
        const data = await listarNotificacoes(details.DETAILS.bloodType)
        setNotifications(data)
      }
    }

    useEffect(() => {
      loadNotifications()
    }, [])
    

  return (
    <>
        <CardContainer>
            <FlatList
                data={notifications}
                renderItem={({item}) => (
                    <NotificationCard title={item.title} description={item.description}/>
                )}
            />
        </CardContainer>
        
    </>
  )
}