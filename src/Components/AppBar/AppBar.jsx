import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/FontAwesome'

function AppBar({title}) {
    const Navigate = useNavigation();
    console.log("t",title)
  return (
    <View style={styles.header}>
        <Icon name='rocket' size={30}  onPress={()=>Navigate.openDrawer()} />
        <Text>{title}</Text>
    </View>
  )
}

export default AppBar

const styles = StyleSheet.create({
     header:{
        backgroundColor:"yellow",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%",
        height:70,
        flexDirection:"row",
        left:-15
     }
})