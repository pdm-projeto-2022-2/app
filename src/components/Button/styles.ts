import styled from "styled-components/native"


export const StyledButton = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.colors.primary};
    padding: 20px;
    border-radius: 10px;
    color: ${({theme})=> theme.colors.on_primary};
    text-align: center;
`
export const TouchableText = styled.Text`
    color: ${({theme})=> theme.colors.on_primary};
    text-align: center;
`