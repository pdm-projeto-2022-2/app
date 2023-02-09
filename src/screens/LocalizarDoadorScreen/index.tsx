import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert, Dimensions, View } from 'react-native'
import MapView, { Callout, MapPressEvent, Marker } from 'react-native-maps'
import Button from '../../components/Button'
import { PickerView, UserMap } from './styles'
import {Picker} from '@react-native-picker/picker';

export default function LocalizarDoadorScreen() {

const bloodtypes = ['O+', 'B+', 'A+', 'AB+','O-', 'B-', 'A-', 'AB-']


  const navigation = useNavigation()
  const [pickerFocused, setPickerFocused] = useState(false)
  const [sangueSelecionado, setSangueSelecionado] = useState('')


  return (
    <>
        <UserMap
          initialRegion={{
            latitude: -6.88878652704693,
            longitude: -38.559687625841406,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008
          }}
        >
            <Marker coordinate={{latitude:-6.88878652704693, longitude: -38.559687625841406}}
              title='Nome do Doador'
              description='Email - Telefone'
            >
            </Marker>
        </UserMap>
        <PickerView>
          <Picker 
              onFocus={() => setPickerFocused(true)}
              onBlur={() => setPickerFocused(false)}
              selectedValue={sangueSelecionado}
              onValueChange={(itemValue, itemIndex) => {
                  setSangueSelecionado(itemValue)
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
        </PickerView>
    </>
  )
}
