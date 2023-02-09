import React, { useState } from 'react';
import {StyledInput, Container} from "../../styles/styled.components";
import {SafeAreaView} from "react-native-safe-area-context";
import { Content, FormRow, Title } from './styles';
import Button from '../../components/Button';
import { Formik, FormikFormProps, FormikHelpers } from 'formik';
import { Alert, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';


interface IForm{
    email: string,
    name: string,
    phone: string,
    pass: string,
    tipoSangue: string
}

function SigninScreen() {

    const navigation = useNavigation()
    const [pickerFocused, setPickerFocused] = useState(false)
    const [tipoSangue, setTipoSangue] = useState('')

    const bloodtypes = ['O+', 'B+', 'A+', 'AB+','O-', 'B-', 'A-', 'AB-']


    const formInitialValue:IForm = {
        email: '',
        name: '',
        phone: '',
        pass: '',
        tipoSangue: ''
    }

    function onSubmit(values: IForm, helper:FormikHelpers<IForm>){
        Alert.alert(JSON.stringify(values))
        helper.resetForm()
        navigation.navigate('SigninMap')
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
                            {({values, handleSubmit, handleChange, setFieldValue})=>(
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
                                <Picker 
                                    onFocus={() => setPickerFocused(true)}
                                    onBlur={() => setPickerFocused(false)}
                                    selectedValue={values.tipoSangue}
                                    onValueChange={(itemValue, itemIndex) => {
                                        setFieldValue('tipoSangue', itemValue)
                                    }}
                                >
                                    <Picker.Item
                                        value=""
                                        label="Tipo de Sangue"
                                        enabled={!pickerFocused}
                                    />
                                    {bloodtypes.map(type => (
                                        <Picker.Item
                                            key={type}
                                            value={type}
                                            label={type}
                                        />
                                    ))}
                                </Picker>
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