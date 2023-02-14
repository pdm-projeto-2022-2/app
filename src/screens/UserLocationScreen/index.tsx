import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { Alert, Dimensions, View } from 'react-native'
import MapView, { MapPressEvent } from 'react-native-maps'
import Button from '../../components/Button'
import UserRegisterContext from '../../context/UserRegisterContext'
import { UserMap } from './styles'

export default function UserLocationScreen() {

  const navigation = useNavigation()
  const registerContext = useContext(UserRegisterContext)


  function handleMapPress(event:MapPressEvent){
    registerContext.localizacao = event.nativeEvent.coordinate.latitude +" "+event.nativeEvent.coordinate.longitude
    navigation.navigate('SigninPhoto')
  }

  return (
    <>
        <UserMap
          initialRegion={{
            latitude: -6.88878652704693,
            longitude: -38.559687625841406,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008
          }}
          onPress={handleMapPress}
        />
        <View style={{position: "absolute", 
        bottom: 10, display: 'flex', flexDirection: "column", width: Dimensions.get('window').width,
        paddingHorizontal: 100}}>
          <Button text='Pular' onPress={event =>{}}/>
        </View>
    </>
  )
}
