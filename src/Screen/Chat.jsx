import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Chat() {
  return (
    <View style={styles.container}>
      <Text>Chat</Text>
    </View>
  )
}

const styles = StyleSheet.create({
     container:{
        flex:1,
        width:"100%",
        backgroundColor:"#00ccff"
     }
})