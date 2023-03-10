import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Alert, Dimensions, View } from 'react-native'
import MapView, { Callout, MapPressEvent, Marker } from 'react-native-maps'
import Button from '../../components/Button'
import { PickerView, UserMap } from './styles'
import {Picker} from '@react-native-picker/picker';
import { Doador } from '../../api/types'
import { listarDoadorBySangue as listarDoadoresBySangue } from '../../api/doador'

export default function LocalizarDoadorScreen() {

  const bloodtypes = [{value: 'O_POSITIVE', label: 'O+'}, 
  {value: 'B_POSITIVE', label: 'B+'}, 
  {value: 'A_POSITIVE', label: 'A+'}, {value: 'AB_POSITIVE', label: 'AB+'},
  {value: 'O_NEGATIVE', label: 'O-'},
  {value:'B_NEGATIVE', label: 'B-'},
  {value: 'A_NEGATIVE', label: 'A-'},
  {value: 'AB_NEGATIVE', label: 'AB-'}]

  const navigation = useNavigation()
  const [pickerFocused, setPickerFocused] = useState(false)
  const [sangueSelecionado, setSangueSelecionado] = useState('')
  const [doadores, setDoadores] = useState<Doador[]>([])

  async function loadDoadores(sangueSelecionado: string){
    if(sangueSelecionado !== ''){
      const data = await listarDoadoresBySangue(sangueSelecionado)
      setDoadores(data)
    }
  }

  useEffect(() => {
    loadDoadores(sangueSelecionado)
  }, [sangueSelecionado])
  


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
          {doadores.map( item => item.location?
            <Marker 
              key={item.id}
              coordinate={{latitude: Number(item.location.split(" ")[0]), longitude: Number(item.location.split(" ")[1])}}
              title={item.name}
              description={`${item.email} - ${item.phone}`}
            >
            </Marker>
            :null
          )}
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
        </PickerView>
    </>
  )
}
