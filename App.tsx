import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet,} from 'react-native';
import SigninScreen from "./src/screens/SigninScreen";
import theme from './src/styles/theme';
import {ThemeProvider} from 'styled-components/native';
import UserLocationScreen from './src/screens/UserLocationScreen';
import ChangePhotoScreen from './src/screens/ChangePhotoScreen';
import LoginScreen from './src/screens/LoginScreen';

export default function App() {
  return (
      <ThemeProvider theme={theme}>
        <LoginScreen/>
      </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
