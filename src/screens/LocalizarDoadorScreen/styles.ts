import styled from "styled-components/native";
import MapView from 'react-native-maps'
import { Dimensions } from "react-native";


export const UserMap = styled(MapView)`
    width: 100%;
    height: 100%;
`

export const PickerView = styled.View`
    position: absolute;
    width: ${Dimensions.get('screen').width-20}px;
    background-color: ${({theme})=> theme.colors.surface};
    top: 5px;
    margin: 10px;
`