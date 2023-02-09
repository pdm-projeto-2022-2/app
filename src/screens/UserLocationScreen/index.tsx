import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Alert, Dimensions, View } from 'react-native'
import MapView, { MapPressEvent } from 'react-native-maps'
import Button from '../../components/Button'
import { UserMap } from './styles'

export default function UserLocationScreen() {

  const navigation = useNavigation()


  function handleMapPress(event:MapPressEvent){
    Alert.alert(JSON.stringify(event.nativeEvent.coordinate))
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
