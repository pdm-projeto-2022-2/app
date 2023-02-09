import styled from "styled-components/native";

export const Content = styled.View`
    padding: 50px;
`

export const FormRow = styled.View`
    margin: 10px 0;
`

export const Title = styled.Text`
    font-size: ${({theme})=> theme.fontSize.xl}px;
    text-align: center;
    margin-bottom: 10px;
`
export const SecondaryButton = styled.TouchableOpacity`
    background-color: ${({theme})=> theme.colors.surface};
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid;
    border-radius: 10px;
    border-color: ${({theme})=> theme.colors.primary};
`
export const SecondaryButtonText = styled.Text`
    font-weight: 600;
    color: ${({theme})=> theme.colors.primary};
`