import { View, Text, Alert } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Container, StyledInput } from '../../styles/styled.components'
import { Content, FormRow, SecondaryButton, SecondaryButtonText, Title } from './styles'
import Button from '../../components/Button'
import { Formik, FormikHelpers } from 'formik'
import { useNavigation } from '@react-navigation/native'
import AuthContext from '../../context/AuthContext'


interface LoginFormProps {
    email: string,
    pass: string
}

export default function LoginScreen() {

    const initialValues: LoginFormProps = {email: '', pass: ''}
    const navigation = useNavigation()
    const context = useContext(AuthContext)

    function onSubmit(values: LoginFormProps, helpers: FormikHelpers<LoginFormProps>){
        Alert.alert(JSON.stringify(values))
        if(values.email === 'funcionario'){
            context.role = 'funcionario'
        }else{
            context.role = 'usuario'
        }
        navigation.navigate('Home')
    }

  return (
    <>
        <SafeAreaView>
            <Container>
                <Formik initialValues={initialValues}
                    onSubmit={onSubmit}
                >
                {({handleChange, handleSubmit})=>(
                    <Content>
                        <Title>Login</Title>
                        <FormRow>
                            <StyledInput placeholder='Email' onChangeText={handleChange('email')}/>
                        </FormRow>
                        <FormRow>
                            <StyledInput placeholder='Senha' secureTextEntry onChangeText={handleChange('pass')}/>
                        </FormRow>
                        <Button text='Entrar' onPress={()=>{handleSubmit()}}/>
                    </Content>
                )}
                </Formik>
                <Content>
                    <SecondaryButton onPress={()=> navigation.navigate('Signin')}>
                        <SecondaryButtonText>Quero me cadastrar</SecondaryButtonText>
                    </SecondaryButton>
                </Content>
            </Container>
        </SafeAreaView>
    </>
  )
}
