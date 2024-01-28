import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import logo from "../../assets/Image/Leaf.png";
import { Button } from 'react-native-elements';
import SelectBox from 'react-native-multi-selectbox'
import  DateTimePicker  from '@react-native-community/datetimepicker';



const K_OPTIONS = [
  {
    item: 'Masanamuthu',
    id: 'M',
  },
  {
    item: 'Thalavanimuthu',
    id: 'T',
  },
  
  
]


export default function UserCreationForm() {
  const [selectedTeam, setSelectedTeam] = useState({})
    const {handleSubmit, control,setError ,formState : {errors}} = useForm({
        defaultValues:{
         username:"",
         fathername:"",
         temple:null,
         dob:"",
         village:'',
        }
    })

    
    const [date,setDate]=useState(null);
    console.log("date",date);
    const [showDate,setShowDate] = useState(false);
    console.log("showDate",showDate);

    const handleDateChange = (event, selectedDate) => {
      setShowDate(Platform.OS === 'ios');
      if (selectedDate) {
        setDate(selectedDate);
      }
    };

    const onSubmit = (data) =>{
    console.log("onSubmitData",data);
  
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
                required: {
                  value: true,
                  message: 'Enter the username',
                },
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
               {errors.username && <Text style={styles.errorText} >{errors.username.message}</Text>}
              <Controller
              name="fathername"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Enter the father',
                },
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
               {errors.fathername && <Text style={styles.errorText} >{errors.fathername.message}</Text>}
               
               <Controller
               name="dob"
               control={control}
               render={({field})=>(
                <>
                 <TextInput
                style={styles.textfield} 
                placeholder="Date Of Birth"
                onFocus={() => setShowDate(true)}
                value={date ? date.toDateString() : ''} 
                />

  { !date && <Text style={styles.errorText} >Please enter DOB</Text>}
              
              {showDate && (
    <DateTimePicker
    value={date || new Date()}
      onChange={handleDateChange}
      mode="date"
    />
  )}
                </>
               
              )}

               />
                
          
              
               <Controller
               name="temple"
               control={control}
               rules={{
                required: {
                  value: true,
                  message: 'Select a temple',
                },
              }}
              render={({ field }) => {
                //console.log("Field Value:", field);
                return (
                  <SelectBox
                  containerStyle={{ marginTop:-20, marginBottom:10}}
                  selectedItemStyle={{fontSize:20}}
        label={false}
        
        options={K_OPTIONS}
        value={selectedTeam}
        onChange={(val) => {
          //console.log("Selected Value:", val);
          field.onChange(val); // Use field.onChange to update the form state
          setSelectedTeam(val);
        }}
        hideInputFilter={false}
      />
                );
              }}
               />
                {errors.temple && <Text style={styles.errorText} >{errors.temple.message}</Text>}

                <Controller
              name="village"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Enter a village',
                },
              }}
              render={({field: {onChange, onBlur,value}})=>(
                <TextInput 
                style={styles.textfield} 
                placeholder="Village Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                />
              )}
              />
               {errors.village && <Text style={styles.errorText} >{errors.village.message}</Text>}
               
               
              
                
            
          
              
              
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
    //backgroundColor:"red",
    borderBottomWidth:2,
    borderBottomColor:"#e0e0e0",
   fontSize:20,
   margin:20
    },
    errorText:{
        width:"100%",
       marginTop:-20,
   color:"red"
      },
      selectBox: {
        backgroundColor: 'red',
        borderRadius: 8,
        padding: 10,
        // Add any other custom styles you want to apply
      },
  
   
})