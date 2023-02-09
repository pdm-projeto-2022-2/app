import styled from "styled-components/native"

export const Content = styled.View`
    padding: 50px;
`

export const Title = styled.Text`
    font-size: ${({theme})=> theme.fontSize.xl}px;
    text-align: center;
    margin-bottom: 10px;
`