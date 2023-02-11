import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import AgendamentoCard from '../../components/AgendamentoCard'
import { listarAgendamentoDoador } from '../../api/agendamento'
import { Agendamento } from '../../api/types'

export default function MeusAgendamentosScreen() {

  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([])

  async function loadAgendamentos(){
    const data = await listarAgendamentoDoador()
    setAgendamentos(data)
  } 


  useEffect(() => {
    loadAgendamentos()
  }, [])
  

  return (
    <View>
      <FlatList
        data={agendamentos}
        renderItem={({item}) => <AgendamentoCard name={item.donor.name} date={item.date} onRemove={()=>{}} onUpdate={()=>{}}/>}
      />
    </View>
  )
}