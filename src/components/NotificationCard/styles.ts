import styled from "styled-components/native";

export const Card = styled.View`
    background-color: ${({theme})=> theme.colors.surface};
    border-width: 1px;
    border-radius: 2px;
    border-color: #ddd;
    padding: 10px;
`

export const Title = styled.Text`
    font-weight: 900;
`

export const Info = styled.Text`
    margin: 5px 15px;
`