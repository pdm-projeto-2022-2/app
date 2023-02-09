import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet,} from 'react-native';
import SigninScreen from "./src/screens/SigninScreen";
import theme from './src/styles/theme';
import {ThemeProvider} from 'styled-components/native';
import UserLocationScreen from './src/screens/UserLocationScreen';
import ChangePhotoScreen from './src/screens/ChangePhotoScreen';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabbed from './src/screens/BottomTabbed';


export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Signin' component={SigninScreen}/>
            <Stack.Screen name='SigninMap' component={UserLocationScreen} />
            <Stack.Screen name='SigninPhoto' component={ChangePhotoScreen}/>
            <Stack.Screen name='BottomTabbed' component={BottomTabbed} />
          </Stack.Navigator>
        </NavigationContainer>
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
