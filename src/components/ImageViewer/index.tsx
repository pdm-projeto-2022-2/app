import { Image } from "react-native";

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
    const imageSource = !!selectedImage
      ? { uri: selectedImage }
      : placeholderImageSource;
  
    return <Image source={imageSource} style={{width: 300, height: 300}}/>;
  }