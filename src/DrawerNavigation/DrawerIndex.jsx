import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import HomePage from '../Screen/HomePage';
import Sample from "../Screen/Sample";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppBar from '../Components/AppBar/AppBar';
import { SafeAreaView } from 'react-native';
import TabScreen from '../Tabs/Tab';


//const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerIndex() {

  return (
    <SafeAreaView style={{flex:1}}>
    <Drawer.Navigator > 
        {/* <Drawer.Screen name="main" component={Main}  options={{headerTitle:(props)=> <AppBar title="h"/>}}/> */}
       <Drawer.Screen name="HomePage" component={TabScreen}  /> 
       <Drawer.Screen name="Sample" component={Sample}  /> 
    </Drawer.Navigator>
    </SafeAreaView>
    
  )
}

export default DrawerIndex