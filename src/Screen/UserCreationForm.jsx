import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import logo from "../../assets/Image/Leaf.png";
import { Button } from 'react-native-elements';
import SelectBox from 'react-native-multi-selectbox'
import DateTimePickerModal from "react-native-modal-datetime-picker";

const K_OPTIONS = [
  {
    item: 'Masanamuthu',
    id: 'M',
  },
  {
    item: 'Talavanimuthu',
    id: 'T',
  },
  
  
]


export default function UserCreationForm() {
  const [selectedTeam, setSelectedTeam] = useState({})
    const {handleSubmit, control ,formState : {errors}} = useForm({
        defaultValues:{
         username:"",
         fathername:"",
         temple:null,
         date:null,
        }
    })

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      console.warn("A date has been picked: ", date);
      hideDatePicker();
    };

    const onSubmit = (data) =>{
    console.log("Data",data);
    }
  return (
    <View style={styles.container}>
           <View style={styles.imagecontainer}>
              <Image source={logo} style={{height:120, width:120, borderRadius:100}}/>
             </View>
            <View style={styles.main}>
              <Text style={styles.welcome}>Create User</Text>
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
              name="fathername"
              control={control}
              rules={{
                required: "required",
              }}
              render={({field: {onChange, onBlur,value}})=>(
                <TextInput 
                style={styles.textfield} 
                placeholder="Father Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                />
              )}
              />
               {errors.fathername && <Text style={styles.errorText} >Enter a father Name</Text>}
          
       
               <Controller
               name="temple"
               control={control}
               rules={{
                required: "required",
              }}
              render={({ field }) => {
                console.log("Field Value:", field);
                return (
                  <SelectBox
        label={false}
        
        options={K_OPTIONS}
        value={selectedTeam}
        onChange={(val) => {
          console.log("Selected Value:", val);
          field.onChange(val); // Use field.onChange to update the form state
          setSelectedTeam(val);
        }}
        hideInputFilter={false}
      />
                );
              }}
               />
                {errors.temple && <Text style={styles.errorText} >Please Select a Temple</Text>}

              
               
              
                
            
          
              
              
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