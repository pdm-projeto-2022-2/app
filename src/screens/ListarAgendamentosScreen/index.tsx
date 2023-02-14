import { View, Text } from 'react-native'
import React, { Fragment, useEffect, useState } from 'react'
import AgendamentoCard from '../../components/AgendamentoCard'
import { Agendamento } from '../../api/types'
import { listarTodosAgendamentos } from '../../api/agendamento'

export default function ListarAgendamentoScreen() {

  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([])

  async function loadAgendamentos() {
    const data = await listarTodosAgendamentos()
    setAgendamentos(data)
  }

  useEffect(() => {
    loadAgendamentos()
  }, [])
  

  return (
    <View>
      {agendamentos.map(item =>
        <Fragment key={item.id+""}>
          <AgendamentoCard name={item.donor.name} date={item.date} onRemove={()=>{}} onUpdate={()=>{}}/>
        </Fragment>
        )}
    </View>
  )
}