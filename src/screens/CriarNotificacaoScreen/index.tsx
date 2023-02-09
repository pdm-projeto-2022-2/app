import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { Container, StyledInput } from '../../styles/styled.components'
import {Picker} from '@react-native-picker/picker';
import { Content, FormRow } from './styles';
import { Formik, FormikHelpers } from 'formik';
import Button from '../../components/Button';

interface CriarNotificacaoForm{
  tipoSangue: string
  titulo: string
  desc: string
}

const bloodtypes = ['O+', 'B+', 'A+', 'AB+','O-', 'B-', 'A-', 'AB-']

export default function CriarNotificacaoScreen() {

  const [pickerFocused, setPickerFocused] = useState(false)

  const initialForm: CriarNotificacaoForm = {
    titulo: '',
    desc: '',
    tipoSangue: ''
  }
  
  async function onSubmit(values: CriarNotificacaoForm, helpers: FormikHelpers<CriarNotificacaoForm>) {
    Alert.alert(JSON.stringify(values))
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
                  value='Todos'
                  label='Todos'
              />
            {bloodtypes.map(type => (
              <Picker.Item
                  key={type}
                  value={type}
                  label={type}
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