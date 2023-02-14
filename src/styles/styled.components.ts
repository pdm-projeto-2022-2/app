import styled from "styled-components/native"

export const StyledInput = styled.TextInput`
    border-radius: 5px;
    border: 1px solid;
    padding: 5px 10px;
    background-color: ${({theme})=> theme.colors.background};
`

export const Container = styled.View`
    display: flex;
    
`