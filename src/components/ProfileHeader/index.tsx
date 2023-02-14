import { View, Text, Image } from 'react-native'
import React, { useContext } from 'react'
import ImageViewer from '../ImageViewer'
import AuthContext from '../../context/AuthContext'
import client from '../../api/client'
import { Header, ImageContainer, ProfileInfo} from './styles'
import ProfileImageViewer from '../ProfileImageViwer'

export default function ProfileHeader() {

    const {details} = useContext(AuthContext)

  return (
    <Header>
        <ImageContainer>
            <ProfileImageViewer placeholderImageSource="" selectedImage={`${client.defaults.baseURL}/uploads/${details.DETAILS.image}`}/>
        </ImageContainer>
        <ProfileInfo>
            <View>
                <Text>{details.DETAILS.name}</Text>
                <Text>{details.DETAILS.email}</Text>
            </View>
            <View>
                <Text>{details.DETAILS.bloodType}</Text>
            </View>
        </ProfileInfo>
    </Header>
  )
}