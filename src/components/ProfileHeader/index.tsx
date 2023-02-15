import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ImageViewer from '../ImageViewer'
import AuthContext from '../../context/AuthContext'
import client from '../../api/client'
import { Header, ImageContainer, ProfileInfo, ProfileName} from './styles'
import ProfileImageViewer from '../ProfileImageViwer'
import { useNavigation } from '@react-navigation/native'
import { Doador } from '../../api/types'

export default function ProfileHeader() {

    const {details} = useContext(AuthContext)
    const navigation = useNavigation()
    const [bloodLabel, setBloodLabel] = useState('')

    const bloodtypes = [{value: 'O_POSITIVE', label: 'O+'}, 
  {value: 'B_POSITIVE', label: 'B+'}, 
  {value: 'A_POSITIVE', label: 'A+'}, {value: 'AB_POSITIVE', label: 'AB+'},
  {value: 'O_NEGATIVE', label: 'O-'},
  {value:'B_NEGATIVE', label: 'B-'},
  {value: 'A_NEGATIVE', label: 'A-'},
  {value: 'AB_NEGATIVE', label: 'AB-'}]

    function instanceOfDoador(object: any): object is Doador {
        return 'bloodType' in object;
    }

    function loadLabel(){
        if(instanceOfDoador(details.DETAILS)){
            const blood = details.DETAILS.bloodType;
            bloodtypes.forEach(element => {
                if(element.value === blood){
                    setBloodLabel(element.label)
                }
            });
        }

    }

    useEffect(() => {
      loadLabel()
    }, [details])
    
    

    async function logoff() {
        Alert.alert("Logout", "Deseja realmente sair?",[{
            text: "Não"
        },
        {
            text: "Sim",
            onPress: () => {
                client.interceptors.request.clear()
        navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
        })
            }
        }
        ])
        
    }

  return (
        <TouchableOpacity onPress={logoff}>
    <Header>
            <ImageContainer>
                <ProfileImageViewer placeholderImageSource="" selectedImage={`${client.defaults.baseURL}/uploads/${details.DETAILS.image}`}/>
            </ImageContainer>
            <ProfileInfo>
                <View>
                    <ProfileName>{details.DETAILS.name}</ProfileName>
                    <Text>{details.DETAILS.email}</Text>
                </View>
                <View>
                    <Text>{bloodLabel}</Text>
                </View>
            </ProfileInfo>
    </Header>
        </TouchableOpacity>
  )
}