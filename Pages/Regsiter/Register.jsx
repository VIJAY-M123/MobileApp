import { Button, StyleSheet, Text, TextInput, View } from "react-native";


export default function Register(){
    return(
        <View style={styles.container}>
            <View style={styles.main}>
              <Text style={styles.welcome}>Welcome</Text>
              <TextInput style={styles.textfield} placeholder="Username"/>
              <TextInput style={styles.textfield} placeholder="Email"/>
              <TextInput secureTextEntry style={styles.textfield} placeholder="Password"/>
              <TextInput secureTextEntry style={styles.textfield} placeholder="Confirm Password"/>
              <Button title="Register" />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#00ccff",
        width:"100%",
        justifyContent:"flex-end",
        alignItems:"flex-end",
        //padding:30,
    },
    main:{  
    backgroundColor:"white",
    height:600,
    width:"100%",
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
    alignItems:"center",
    justifyContent:'center',
    padding:30,
    },
    welcome:{
     fontSize:30,
     fontWeight:"bold",
     color:"#00ccff",
     marginBottom:20,
    },
  
    textfield:{
    width:"100%",
    height:50,
    //backgroundColor:"red",
    marginBottom:20,
    borderBottomWidth:2
    },
  
   
})