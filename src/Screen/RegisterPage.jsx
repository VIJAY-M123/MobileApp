import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, TextInput, View,Image } from "react-native";
import { Button } from "react-native-elements";

import logo from "../../assets/Image/Leaf.png";


export default function RegisterPage(){
    const {handleSubmit, control ,formState : {errors}} = useForm({
        defaultValues:{
         username:"",
         email:"",
         password:"",
         confirmpassword:""

        }
    })

    const onSubmit = (data) =>{
        console.log("Data",data)
    }
    return(
        <View style={styles.container}>
           <View style={styles.imagecontainer}>
              <Image source={logo} style={{height:120, width:120, borderRadius:100}}/>
             </View>
            <View style={styles.main}>
              <Text style={styles.welcome}>Welcome</Text>
              <Controller
              name="username"
              control={control}
              rules={{
                required: "required",
              }}
              render={({field: {onChange, onBlur,value}})=>(
                <TextInput 
                style={styles.textfield} 
                placeholder="Username"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                />
              )}
              />
               {errors.username && <Text style={styles.errorText} >Enter a username</Text>}
              <Controller
              name="email"
              control={control}
              rules={{
                required: "required",
              }}
              render={({field: {onChange, onBlur,value}})=>(
                <TextInput 
                style={styles.textfield} 
                placeholder="Email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                />
              )}
              />
               {errors.email && <Text style={styles.errorText} >Enter a email</Text>}
              <Controller
              name="password"
              control={control}
              rules={{
                required: "required",
              }}
              render={({field: {onChange, onBlur,value}})=>(
                <TextInput 
                style={styles.textfield} 
                placeholder="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                />
              )}
              />
               {errors.password && <Text style={styles.errorText} >Enter a password</Text>}

             <Controller
              name="confirmpassword"
              control={control}
              rules={{
                required: "required",
              }}
              render={({field: {onChange, onBlur,value}})=>(
                <TextInput 
                style={styles.textfield} 
                placeholder="Confirm Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                />
              )}
              />
               {errors.confirmpassword && <Text style={styles.errorText} >Enter a confirmpassword</Text>}
              
              
              <Button title="Register" 
             
             containerStyle={{backgroundColor:'#00ccff', width:"100%", borderRadius:10, marginTop:40 }} 
             titleStyle={{color:"white", fontSize:20}}
             buttonStyle={{
               backgroundColor:"#00ccff",
               height: 50,
               // Set your desired height here
             }}
             onPress={handleSubmit(onSubmit)}/>
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
    imagecontainer:{
      //height:400,
      width:"100%",
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      //backgroundColor:"red"
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
    //height:50,
    //backgroundColor:"red",
   // marginBottom:20,
    borderBottomWidth:2,
    borderBottomColor:"#e0e0e0",
   // marginBottom:30
   margin:20
    },
    errorText:{
        width:"100%",
       marginTop:-20,
   color:"red"
      },
  
   
})