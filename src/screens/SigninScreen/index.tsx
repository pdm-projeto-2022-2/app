import React, { useContext, useState } from 'react';
import {StyledInput, Container} from "../../styles/styled.components";
import {SafeAreaView} from "react-native-safe-area-context";
import { Content, FormRow, Title } from './styles';
import Button from '../../components/Button';
import { Formik, FormikFormProps, FormikHelpers } from 'formik';
import { Alert, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import UserRegisterContext from '../../context/UserRegisterContext';


interface IForm{
    email: string,
    name: string,
    phone: string,
    pass: string,
    tipoSangue: string,
    sexo: string
}

function SigninScreen() {

    const navigation = useNavigation()
    const [pickerFocused, setPickerFocused] = useState(false)
    const registerContext = useContext(UserRegisterContext)

    const bloodtypes = [{value: 'O_POSITIVE', label: 'O+'}, 
    {value: 'B_POSITIVE', label: 'B+'}, 
    {value: 'A_POSITIVE', label: 'A+'}, {value: 'AB_POSITIVE', label: 'AB+'},
    {value: 'O_NEGATIVE', label: 'O-'},
    {value:'B_NEGATIVE', label: 'B-'},
    {value: 'A_NEGATIVE', label: 'A-'},
    {value: 'AB_NEGATIVE', label: 'AB-'}]

    const formInitialValue:IForm = {
        email: '',
        name: '',
        phone: '',
        pass: '',
        tipoSangue: '',
        sexo: ''
    }

    function onSubmit(values: IForm, helper:FormikHelpers<IForm>){
        registerContext.email = values.email
        registerContext.nome = values.name
        registerContext.tel = values.phone
        registerContext.senha = values.pass
        registerContext.tipoSangue = values.tipoSangue
        registerContext.sexo = values.sexo
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
                                <FormRow>
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
                                                key={type.value}
                                                value={type.value}
                                                label={type.label}
                                            />
                                        ))}
                                    </Picker>
                                </FormRow>
                                <FormRow>
                                    <Picker 
                                        onFocus={() => setPickerFocused(true)}
                                        onBlur={() => setPickerFocused(false)}
                                        selectedValue={values.sexo}
                                        onValueChange={(itemValue, itemIndex) => {
                                            setFieldValue('sexo', itemValue)
                                        }}
                                    >
                                        <Picker.Item
                                            value=""
                                            label="Sexo"
                                        />
                                        <Picker.Item
                                            value="M"
                                            label="Masculino"
                                        />
                                        <Picker.Item
                                            value="F"
                                            label="Feminino"
                                        />
                                        
                                    </Picker>
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