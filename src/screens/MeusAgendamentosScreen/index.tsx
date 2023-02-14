import { View, Text, FlatList, Alert } from 'react-native'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import AgendamentoCard from '../../components/AgendamentoCard'
import { doDonation, listarAgendamentoDoador, removeAgendamento } from '../../api/agendamento'
import { Agendamento } from '../../api/types'
import AuthContext from '../../context/AuthContext'

export default function MeusAgendamentosScreen() {

  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([])
  const {details} = useContext(AuthContext)

  async function loadAgendamentos(){
    const data = await listarAgendamentoDoador(details.DETAILS.id)
    setAgendamentos(data)
  } 

  async function onUpdate(donationId: Number){
    doDonation(donationId)
    loadAgendamentos();
  }

  async function onDelete(donationId: Number){
    Alert.alert("Remover", "Deseja Remover?",[
      {text: "Não"},
      {
      text: "Sim",
      onPress: () => {
        removeAgendamento(donationId)
        loadAgendamentos();
      }},
    ])
    
  }

  useEffect(() => {
    loadAgendamentos()
  }, [])
  

  return (
    <View>
      <FlatList
        data={agendamentos}
        renderItem={({item}) => 
        <AgendamentoCard 
          key={item.id.toString()}  
          name={item.donor.name} 
          date={item.date} 
          onRemove={()=>{onDelete(item.id)}} 
          onUpdate={()=>{onUpdate(item.id)}}
          status={item.status}
          />}
      />
    </View>
  )
}