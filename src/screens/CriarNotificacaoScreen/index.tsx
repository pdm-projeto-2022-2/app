import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { Container, StyledInput } from '../../styles/styled.components'
import {Picker} from '@react-native-picker/picker';
import { Content, FormRow } from './styles';
import { Formik, FormikHelpers } from 'formik';
import Button from '../../components/Button';
import { Notification } from '../../api/types';
import { criarNotificacao } from '../../api/notificacao';

interface CriarNotificacaoForm{
  tipoSangue: string
  titulo: string
  desc: string
}

const bloodtypes = [{value: 'O_POSITIVE', label: 'O+'}, 
  {value: 'B_POSITIVE', label: 'B+'}, 
  {value: 'A_POSITIVE', label: 'A+'}, {value: 'AB_POSITIVE', label: 'AB+'},
  {value: 'O_NEGATIVE', label: 'O-'},
  {value:'B_NEGATIVE', label: 'B-'},
  {value: 'A_NEGATIVE', label: 'A-'},
  {value: 'AB_NEGATIVE', label: 'AB-'}]

export default function CriarNotificacaoScreen() {

  const [pickerFocused, setPickerFocused] = useState(false)

  const initialForm: CriarNotificacaoForm = {
    titulo: '',
    desc: '',
    tipoSangue: ''
  }
  
  async function onSubmit(values: CriarNotificacaoForm, helpers: FormikHelpers<CriarNotificacaoForm>) {
    const notification: Notification = {
      bloodType: values.tipoSangue,
      title: values.titulo,
      description: values.desc
    }
    criarNotificacao(notification)
    helpers.resetForm()
  }

  return (
    <Container>
      <Formik
        initialValues={initialForm}
        onSubmit={onSubmit}
      >
        {({values, handleChange, handleSubmit, setFieldValue})=>
        
        <Content>
          <Picker 
            onFocus={() => setPickerFocused(true)}
            onBlur={() => setPickerFocused(false)}
            selectedValue={values.tipoSangue}
            onValueChange={(itemValue, itemIndex) => {
                setFieldValue('tipoSangue', itemValue)
            }}
          >
            <Picker.Item
                value=""
                label="Tipo de Sangue"
                enabled={!pickerFocused}
            />
            <Picker.Item
                  value='ALL'
                  label='Todos'
              />
            {bloodtypes.map(type => (
              <Picker.Item
                  key={type.value}
                  value={type.value}
                  label={type.label}
              />
            ))}
          </Picker>
          <FormRow>
            <StyledInput placeholder='Titulo' value={values.titulo} onChangeText={handleChange('titulo')}/>
          </FormRow>
          <FormRow>
            <StyledInput placeholder='Descrição' multiline value={values.desc} onChangeText={handleChange('desc')}/>
          </FormRow>
          <Button text='Enviar' onPress={()=>{handleSubmit()}}/>
        </Content>
      }
      </Formik>
    </Container>
  )
}