import React from 'react';
import {StyledInput, Container} from "../../styles/styled.components";
import {SafeAreaView} from "react-native-safe-area-context";
import { Content, FormRow, Title } from './styles';
import Button from '../../components/Button';
import { Formik, FormikFormProps, FormikHelpers } from 'formik';
import { Alert, View } from 'react-native';

interface IForm{
    email: string,
    name: string,
    phone: string,
    pass: string,
}

function SigninScreen() {

    const formInitialValue:IForm = {
        email: '',
        name: '',
        phone: '',
        pass: ''
    }

    function onSubmit(values: IForm, helper:FormikHelpers<IForm>){
        Alert.alert(JSON.stringify(values))
    }

    return (
        <>
            <Container>
                <SafeAreaView>
                    <Content>
                        <>
                            <Title>Cadastro</Title>
                            <Formik
                                initialValues={formInitialValue}
                                onSubmit={onSubmit}
                            >
                            {({values, handleSubmit, handleChange})=>(
                            <>
                                <FormRow>
                                    <StyledInput
                                        placeholder="Email"
                                        value={values.email}
                                        onChangeText={handleChange('email')}
                                    />
                                </FormRow>
                                <FormRow>
                                    <StyledInput
                                        placeholder="Nome Completo"
                                        value={values.name}
                                        onChangeText={handleChange('name')}
                                    />
                                </FormRow>
                                <FormRow>
                                    <StyledInput
                                        placeholder="Telefone"
                                        value={values.phone}
                                        onChangeText={handleChange('phone')}
                                    />
                                </FormRow>
                                <FormRow>
                                    <StyledInput
                                        placeholder="Senha"
                                        value={values.pass}
                                        onChangeText={handleChange('pass')}
                                        secureTextEntry
                                    />
                                </FormRow>
                                <Button text="Avançar" onPress={event => handleSubmit()} />
                            </>
                            )}
                        </Formik>
                        </>
                    </Content>
                </SafeAreaView>
            </Container>
        </>
    );
}

export default SigninScreen;