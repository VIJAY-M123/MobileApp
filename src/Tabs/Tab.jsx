import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomePage from '../Screen/HomePage'
import Chat from '../Screen/Chat'
import Group from "../../assets/Image/group.png";
import ChatIcon from "../../assets/Image/chat.png"

const Tab = createBottomTabNavigator()


export default function TabScreen() {
  return (
    <Tab.Navigator 
    screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarIcon: () => null,  // Hide default icons
        
        tabBarStyle:{
            position:"absolute",
           left:20,
           right:20,
           bottom:20,
           backgroundColor:"#ffffff",
           borderRadius:15,
           height:90,
           ...styles.shadow

        }
    }} 
    
    

 
    >
        <Tab.Screen
        options={{
            tabBarIcon: ({focused}) => (
             <View style={{alignItems:"center", justifyContent:"center", top:10}}>
                <Image
                 source={Group}
                resizeMode='contain'
                style={{
                    width:25,
                    height:25,
                    tintColor: focused ? "#00ccff": "black"
                }}
                />
                <Text  style={{
                    width:50,
                    height:25,
                    color: focused ? "#00ccff" : "black",
                    fontSize:13,
                    marginLeft:10
                   
                }}>GROUP</Text>
             </View>
            )
        }}
         name="GROUP" 
         component={HomePage}/>
        <Tab.Screen
         options={{
            tabBarIcon: ({focused}) => (
             <View style={{alignItems:"center", justifyContent:"center", top:10}}>
                <Image 
                source={ChatIcon}
                resizeMode='contain'
                style={{
                    width:25,
                    height:25,
                    tintColor: focused ? "#00ccff": "black"
                }}
                />
                <Text  style={{
                    width:50,
                    height:25,
                    color: focused ? "#00ccff" : "black",
                    fontSize:13,
                    marginLeft:15
                }}>CHAT</Text>
             </View>
            )
        }}
         name="Chat"
          component={Chat}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    shadow:{
        shadowColor:"#000000",
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:0.2,
        shadowRadius:3.5,
        elevation:5
    }
})