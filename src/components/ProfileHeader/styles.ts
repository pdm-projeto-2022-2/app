import { Dimensions } from "react-native";
import styled from "styled-components/native";
import ImageViewer from "../ImageViewer";

export const Header = styled.View`
    display: flex;
    flex-direction: row;
    width: ${Dimensions.get("window").width}px;
`

export const ImageContainer = styled.View`
    border-radius: 500px;
    overflow: hidden;
    margin-right: 10px;
`

export const ProfileInfo = styled.View`
    display: flex;
    flex-direction: row;
    width: 75%;
    justify-content: space-between;
`

export const ProfileName = styled.Text`
    font-weight: 800;
`