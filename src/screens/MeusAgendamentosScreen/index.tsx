import { View, Text, FlatList } from 'react-native'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import AgendamentoCard from '../../components/AgendamentoCard'
import { listarAgendamentoDoador } from '../../api/agendamento'
import { Agendamento } from '../../api/types'
import AuthContext from '../../context/AuthContext'

export default function MeusAgendamentosScreen() {

  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([])
  const {details} = useContext(AuthContext)

  async function loadAgendamentos(){
    const data = await listarAgendamentoDoador(details.DETAILS.id)
    setAgendamentos(data)
  } 


  useEffect(() => {
    loadAgendamentos()
  }, [])
  

  return (
    <View>
      <FlatList
        data={agendamentos}
        renderItem={({item}) => <AgendamentoCard key={item.id.toString()}  name={item.donor.name} date={item.date} onRemove={()=>{}} onUpdate={()=>{}}/>}
      />
    </View>
  )
}