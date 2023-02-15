import { View, Text, Alert } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Container, StyledInput } from '../../styles/styled.components'
import { Content, FormRow, SecondaryButton, SecondaryButtonText, Title } from './styles'
import Button from '../../components/Button'
import { Formik, FormikHelpers } from 'formik'
import { useNavigation } from '@react-navigation/native'
import AuthContext from '../../context/AuthContext'
import { login } from '../../api/auth'
import jwtDecode from 'jwt-decode'
import { UserTokenDetail } from '../../api/types'
import client from '../../api/client'
import { isAxiosError } from 'axios'


interface LoginFormProps {
    email: string,
    pass: string
}

export default function LoginScreen() {

    const initialValues: LoginFormProps = {email: '', pass: ''}
    const navigation = useNavigation()
    const context = useContext(AuthContext)

    async function onSubmit(values: LoginFormProps, helpers: FormikHelpers<LoginFormProps>){
        try{
            const data = await login(values.email, values.pass)
            const tokenDetail: UserTokenDetail = jwtDecode(data.token)
            if(tokenDetail.ROLE === 'ROLE_EMPLOYEE'){
                context.role = 'funcionario'
            }else{
                context.role = 'usuario'
            }
            context.details = tokenDetail
            client.interceptors.request.use((config)=>{
                config.headers.Authorization = `Bearer ${data.token}`
                return config;
            })
            navigation.navigate('Home')
        }catch(err){
            if(isAxiosError(err) && err.response.status == 403){
                Alert.alert("Email ou Senha Inválidos")
            }
        }
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
