import { View, Text, FlatList, Alert } from 'react-native'
import React, { Fragment, useEffect, useState } from 'react'
import AgendamentoCard from '../../components/AgendamentoCard'
import { Agendamento } from '../../api/types'
import { listarTodosAgendamentos, removeAgendamento } from '../../api/agendamento'

export default function ListarAgendamentoScreen() {

  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([])

  async function loadAgendamentos() {
    const data = await listarTodosAgendamentos()
    setAgendamentos(data)
  }

  useEffect(() => {
    loadAgendamentos()
  }, [])

  async function onRemove(donationId: Number){
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
  

  return (
    <View>
      <FlatList
        data={agendamentos}
        renderItem={({item}) => 
          <Fragment key={item.id+""}>
            <AgendamentoCard name={item.donor.name} date={item.date} onRemove={()=>{onRemove(item.id)}} onUpdate={()=>{}} status={item.status}/>
          </Fragment>
        }/>
    </View>
  )
}