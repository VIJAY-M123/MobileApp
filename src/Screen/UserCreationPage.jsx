import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'
import { useForm } from 'react-hook-form'

export default function UserCreationPage() {
   
  return (
    <View style={styles.container}>
      <Text>UserCreationPage</Text>
      <Button title="User Creation" 
      containerStyle={{backgroundColor:"black" ,width:"100%"}}
      titleStyle={{color:"white",fontSize:20}}
      buttonStyle={{backgroundColor:'black',height:50, }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"red",
        padding:20
    }
})