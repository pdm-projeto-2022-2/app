import styled from "styled-components/native";


export const Card = styled.View`
    background-color: ${({theme})=> theme.colors.surface};
    min-height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`

export const ButtonView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const IconsView = styled.Text`
    margin: 0 20px
`
