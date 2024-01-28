import React from 'react';
import {  StyleSheet, Text, View,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './src/Screen/LoginPage';
import RegisterPage from './src/Screen/RegisterPage';
import StackIndex from './src/StackNavigation/StackIndex';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerIndex from './src/DrawerNavigation/DrawerIndex';
import 'react-native-gesture-handler';
import UserCreationForm from './src/Screen/UserCreationForm';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
       <StackIndex/>
       {/* <DrawerIndex/> */}
       {/* <UserCreationForm/> */}
      </NavigationContainer>
      
    
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
