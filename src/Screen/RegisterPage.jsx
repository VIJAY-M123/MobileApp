import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, TextInput, View,Image, Alert } from "react-native";
import { Button } from "react-native-elements";

import logo from "../../assets/Image/Leaf.png";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";



export default function RegisterPage(){
  const navigation = useNavigation();
    const {handleSubmit, control ,reset,formState : {errors}} = useForm({
        defaultValues:{
         username:"",
         email:"",
         password:"",
        }
    })

    const fetchData = (data) => {
      const newData = {
        username:data?.username,
        email:data?.email,
        password:data?.password
      }
      return new Promise((resolve, reject) => {
        axios.post('http://192.168.2.72:4000/register',newData)
          .then((response) => {
            console.log("Promis respone",response)
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    };

    const onSubmit = async (data) =>{
        console.log("Data",data)
        
        fetchData(data)
        .then((response) => {
          if(response.status === 200){
            console.log('Data:', data);
            reset();
            Alert.alert(`${response.data.message}`);
            navigation.navigate('UserCreation')
          }
          else{
            Alert.alert(`${response.data.message}`);
          }
         
        })
        .catch((error) => {
          console.error('Error:', error);
        });

       
    }
    return(
        <View style={styles.container}>
           <View style={styles.imagecontainer}>
              <Image source={logo} style={{height:120, width:120, borderRadius:100}}/>
             </View>
            <View style={styles.main}>
              <Text style={styles.welcome}>Welcome</Text>
              <Text style={styles.account}>Already have an account? <Text style={{color:"#00ccff"}} onPress={()=>navigation.navigate('LoginPage')}>Login</Text></Text>
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
               {errors.username && <Text style={styles.errorText} >Please enter a Username</Text>}
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
               {errors.email && <Text style={styles.errorText} >Please enter a Email</Text>}
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
               {errors.password && <Text style={styles.errorText} >Please enter a Password</Text>}
              <Button title="Register" 
             
             containerStyle={{backgroundColor:'#00ccff', width:"100%", borderRadius:10, marginTop:40 }} 
             titleStyle={{color:"white", fontSize:20}}
             buttonStyle={{
               backgroundColor:"#00ccff",
               height: 50,
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
    },
    imagecontainer:{
      width:"100%",
      flex:1,
      justifyContent:"center",
      alignItems:"center",
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
      fontSize:16,
      marginBottom:40,
      },
    textfield:{
    width:"100%",
    height:50,
    fontSize:20,
    borderBottomWidth:2,
    borderBottomColor:"#e0e0e0",
   margin:10
    },
    errorText:{
        width:"100%",
       marginTop:-10,
   color:"red"
      },
  
   
})