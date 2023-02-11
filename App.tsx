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
import HomeScreen from './src/screens/HomeScreen';
import AuthContext from './src/context/AuthContext';
import UserRegisterContext from './src/context/UserRegisterContext';


export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
      <ThemeProvider theme={theme}>
        <AuthContext.Provider value={{role: undefined}} >
          <UserRegisterContext.Provider value={{}}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name='Login' component={LoginScreen} />
              <Stack.Screen name='Signin' component={SigninScreen}/>
              <Stack.Screen name='SigninMap' component={UserLocationScreen} />
              <Stack.Screen name='SigninPhoto' component={ChangePhotoScreen}/>
              <Stack.Screen name='Home' component={HomeScreen} />
            </Stack.Navigator>
          </NavigationContainer>
          </UserRegisterContext.Provider>
        </AuthContext.Provider>
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
