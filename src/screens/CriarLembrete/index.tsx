import { View, Text } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { Content, Title } from './styles';
import Button from '../../components/Button';
import { StyledInput } from '../../styles/styled.components';


export default function CriarLembrete() {

    const [date, setDate] = useState<Date>(new Date())

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
      };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
          value: date,
          onChange,
          mode: currentMode,
          is24Hour: true,
        });
      };
    
      const showDatepicker = () => {
        showMode('date');
      };

  return (
    <Content>
      <Title>Agende Sua Doação</Title>
      <Text>info</Text>
      <StyledInput editable={false} value={date.toLocaleDateString('pt-br')}/>
      <Button text='Selecione uma data' onPress={showDatepicker}/>
    </Content>
  )
}