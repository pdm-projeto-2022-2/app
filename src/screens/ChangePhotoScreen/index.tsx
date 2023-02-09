import React, {useState } from 'react';
import {Container} from "../../styles/styled.components";
import {SafeAreaView} from "react-native-safe-area-context";
import { ButtonContainer, Content, ImageContainer, Title } from './styles';
import Button from '../../components/Button';
import * as ImagePicker from 'expo-image-picker';
import ImageViewer from '../../components/ImageViewer';
import { useNavigation } from '@react-navigation/native';

interface IForm{
    email: string,
    name: string,
    phone: string,
    pass: string,
}

function ChangePhotoScreen() {

    const [image, setImage] = useState<string>()
    const navigation = useNavigation();

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
        navigation.navigate('BottomTabbed')
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