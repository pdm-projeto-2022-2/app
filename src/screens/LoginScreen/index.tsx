import { View, Text, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Container, StyledInput } from '../../styles/styled.components'
import { Content, FormRow, Title } from './styles'
import Button from '../../components/Button'
import { Formik, FormikHelpers } from 'formik'

interface LoginFormProps {
    email: string,
    pass: string
}

export default function LoginScreen() {

    const initialValues: LoginFormProps = {email: '', pass: ''}

    function onSubmit(values: LoginFormProps, helpers: FormikHelpers<LoginFormProps>){
        Alert.alert(JSON.stringify(values))
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
            </Container>
        </SafeAreaView>
    </>
  )
}
