import { View, Text, Image } from 'react-native'
import React from 'react'

export default function ProfileImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource = !!selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;

  return <Image source={imageSource} style={{width: 50, height: 50}}/>;
}