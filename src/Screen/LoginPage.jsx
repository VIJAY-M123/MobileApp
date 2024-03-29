import { useForm } from "react-hook-form";
import {Alert, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Controller } from "react-hook-form";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import logo from "../../assets/Image/Leaf.png";
import axios from "axios";


 
export default function LoginPage(){

  const navigation = useNavigation();

    const {handleSubmit, reset, setValue,control, getValues,  formState: { errors }} = useForm({
      defaultValues : {
        email:"",
        password:"",
        }
       
    })

    const fetchData = (data) => {
      const newData = {
        email:data?.email,
        password:data?.password
      }
      return new Promise((resolve, reject) => {
        axios.post('http://192.168.2.72:4000/login',newData)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    };

    const onSubmit = async (data) =>{
        
        fetchData(data)
        .then((response) => {
          if(response.status === 200){
            reset();
            Alert.alert(`${response.data.message}`);
            navigation.navigate('main')
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
              <Text style={styles.account}>Don't have an account? <Text style={{color:"#00ccff"}} onPress={()=>navigation.navigate('RegisterPage')}>Register Now</Text></Text>
              <Controller
              name="email"
              control={control}
              rules={{
                required: "required",
              }}
              render={({ field: { onChange, onBlur, value } })=>(
                <TextInput 
                style={styles.textfield} 
                placeholder="Email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              
              />
              )}
              />
             {errors.email && <Text style={styles.errorText} >Must enter a email</Text>}
            

             <Controller
              name="password"
              control={control}
              rules={{
                required: "required",
              }}
              render={({ field: { onChange, onBlur, value } })=>(
                <TextInput 
                style={styles.textfield} 
                placeholder="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              
              />
              )}
              />
             {errors.password && <Text style={styles.errorText} >Must enter a username</Text>}
          
              
              <View style={styles.forgetpassword}>
                <Text style={{color:"#00ccff"}}>Forget Password</Text>
              </View>
              <Button title="Login" 
             
              containerStyle={{backgroundColor:'#00ccff', width:"100%", borderRadius:10 }} 
              titleStyle={{color:"white",fontSize:20}}
              buttonStyle={{
                backgroundColor:"#00ccff",
                height: 50, // Set your desired height here
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
    flex:2,
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
    fontSize:20,
    borderBottomWidth:2,
    borderBottomColor:"#e0e0e0",
    margin:15

    },
    forgetpassword: {
        width:"100%",
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom:40,
        marginTop:20,
      },
    errorText:{
      width:"100%",
      color:"red",
      marginTop:-10,
    },
   
})