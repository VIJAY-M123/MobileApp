import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Sample() {
  return (
    <View style={styles.container}> 
        <Text>Sample</Text>
    </View>
  )
}

export default Sample


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"yellow",
    // alignItems:"center",
    // justifyContent:'center'
  }
})