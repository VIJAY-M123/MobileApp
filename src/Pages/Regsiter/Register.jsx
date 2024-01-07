import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements";


export default function Register(){
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
               {errors.username && <Text style={styles.errorText} > sssRequired</Text>}
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
               {errors.email && <Text style={styles.errorText} > sssRequired</Text>}
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
               {errors.password && <Text style={styles.errorText} > sssRequired</Text>}

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
               {errors.confirmpassword && <Text style={styles.errorText} > sssRequired</Text>}
              
              
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
   // marginBottom:20,
    borderBottomWidth:2
    },
    errorText:{
        width:"100%",
        
   color:"red"
      },
  
   
})