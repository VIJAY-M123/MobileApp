import { useForm } from "react-hook-form";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import { Controller } from "react-hook-form";


import  * as yup from "yup";

const defaultValues = {
username:"",
password:"",
}

// const schema = yup.object().shape({
// username:yup.string().required('Must enter the username'),
// password:yup.string().required("Enter a password"),
// })
 
export default function Login(){

    const {handleSubmit, reset, setValue,control, getValues, formState={errors}} = useForm({
        mode:"onChange",
        defaultValues,
       
    })

const onSubmit = (data) =>{
    console.log("Data",data)
}
    return(
        <View style={styles.container}>
           
            <View style={styles.main}>
              <Text style={styles.welcome}>Welcome</Text>
              <Text style={styles.account}>Don't have an account? <Text style={{color:"#00ccff"}}>Register Now</Text></Text>
              <Controller
              name="username"
              control={control}
              rules={{
                required: "required",
              }}
              render={({field})=>(
                <TextInput 
                {...field}
                style={styles.textfield} 
                placeholder="Enter your name"/>
                
              )}
              />
             {errors.username && <Text style={{ color: 'red' }}>{errors.username.message}</Text>}
               <Controller
              name="password"
              control={control}
              render={({field})=>(
                <TextInput 
                {...field}
                secureTextEntry 
                style={styles.textfield} 
                placeholder="Enter your password"/>
              )}
              />
             
              
              <View style={styles.forgetpassword}>
                <Text style={{color:"#00ccff"}}>Forget Password</Text>
              </View>
              <Button title="Login" onPress={handleSubmit(onSubmit)}/>
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
    account:{
        fontSize:15,
        marginBottom:40,
       },
    textfield:{
    width:"100%",
    height:50,
    //backgroundColor:"red",
    marginBottom:20,
    borderBottomWidth:2
    },
    forgetpassword: {
        width:"100%",
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom:40,
      },
   
})