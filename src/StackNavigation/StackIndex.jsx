import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import LoginPage from '../Screen/LoginPage';
import RegisterPage from '../Screen/RegisterPage';
import Main from '../Screen/HomePage';
import DrawerIndex from '../DrawerNavigation/DrawerIndex';
import AppBar from '../Components/AppBar/AppBar';
import UserCreationPage from '../Screen/UserCreationPage';
import UserCreationForm from '../Screen/UserCreationForm';
const Stack = createNativeStackNavigator();

function StackIndex() {

  return (
    <Stack.Navigator initialRouteName='LoginPage' screenOptions={{headerShown:false}} >  
          
          <Stack.Screen name='LoginPage' component={LoginPage} />
          <Stack.Screen name='RegisterPage' component={RegisterPage} />
          <Stack.Screen 
          name='main' 
          component={DrawerIndex}
         
           />
           <Stack.Screen name="UserCreation" component={UserCreationPage} />
           <Stack.Screen name="UserForm" component={UserCreationForm}/>
        </Stack.Navigator>
  )
}

export default StackIndex