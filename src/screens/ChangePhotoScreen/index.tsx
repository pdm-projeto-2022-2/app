import React, {useContext, useState } from 'react';
import {Container} from "../../styles/styled.components";
import {SafeAreaView} from "react-native-safe-area-context";
import { ButtonContainer, Content, ImageContainer, Title } from './styles';
import Button from '../../components/Button';
import * as ImagePicker from 'expo-image-picker';
import ImageViewer from '../../components/ImageViewer';
import { useNavigation } from '@react-navigation/native';
import UserRegisterContext from '../../context/UserRegisterContext';
import { registrarDoador } from '../../api/doador';
import { Alert } from 'react-native';
import { Doador } from '../../api/types';

interface IForm{
    email: string,
    name: string,
    phone: string,
    pass: string,
}

function ChangePhotoScreen() {

    const [image, setImage] = useState<string>()
    const navigation = useNavigation();
    const registerContext = useContext(UserRegisterContext)

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
        setImage(result.assets[0].uri)
    }

    async function onSubmit(){
        const doador: Doador = {
            name: registerContext.nome,
            birthDate: new Date(),
            email: registerContext.email,
            sex: registerContext.sexo,
            phone: registerContext.tel,
            bloodType: registerContext.tipoSangue,
            location: registerContext.localizacao,
            password: registerContext.senha,
            image: ''
        }
        try{
            await registrarDoador(doador)
            Alert.alert("Registrado", JSON.stringify(doador))
            navigation.navigate('Login')
        }catch(err){
            console.dir(err)
        }
    }
    
    return (
        <>
            <Container>
                <SafeAreaView>
                    <Content>
                        <ImageContainer onPress={pickImage}>
                            <ImageViewer placeholderImageSource={require('../../../assets/no-image.png')} selectedImage={image}/>
                        </ImageContainer>
                            <Title>Selecione uma Imagem</Title>
                        <ButtonContainer>
                            <Button text='Enviar' onPress={()=>{onSubmit()}}/>
                        </ButtonContainer>
                        <ButtonContainer>
                            <Button text='Pular' onPress={()=>{}}/>
                        </ButtonContainer>
                    </Content>
                    
                </SafeAreaView>
            </Container>
        </>
    );
    
}

export default ChangePhotoScreen;