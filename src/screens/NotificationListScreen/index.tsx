import { View, Text, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import NotificationCard from '../../components/NotificationCard'
import { CardContainer } from './styles'
import { Notification } from '../../api/types'
import { listarNotificacoes } from '../../api/notificacao'
import AuthContext from '../../context/AuthContext'

export default function NotificationListScreen() {

    const [notifications, setNotifications] = useState<Notification[]>([])
    const {details} = useContext(AuthContext)

    async function loadNotifications(){
        const data = await listarNotificacoes(details.DETAILS.bloodType) //FIXME: context bloodType
        setNotifications(data)
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