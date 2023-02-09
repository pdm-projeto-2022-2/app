import styled from 'styled-components/native'

export const Content = styled.View`
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.Text`
    font-size: ${({theme})=> theme.fontSize.xl}px;
    text-align: center;
    margin-bottom: 10px;
`
export const ImageContainer = styled.TouchableOpacity`
    border-radius: 200px;
    overflow: hidden;
`

export const ButtonContainer = styled.View`
    width: 100%;
    margin: 50px;
`