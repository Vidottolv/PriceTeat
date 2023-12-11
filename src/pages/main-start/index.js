import { React ,useState } from 'react'
import { View, SafeAreaView, Text, StyleSheet, Image, TouchableOpacity, Modal, TextInput }from 'react-native'
import Slider from '@react-native-community/slider'
//import {ModalPassword} from "../../components/modal"


let charset = "abcdefghjklmonpqrstuvwxyzABCDEFGHIJKLMONPQRSTUVWXYZ1234567890"

export function MainPag(){
  const[size, setSize] = useState(10)
  const[passwordValue, setPasswordValue] = useState("")
  const[emailValue, setEmailValue] = useState("")
  const[senhaValue, setSenhaValue] = useState("")

  // const[modalVisible, setModalVisible] = useState(false);
 
  // function generatePassword(){

  //   let password = "";
  //   for(let i = 0, n = charset.length; i < size; i++){
  //     password += charset.charAt(Math.floor(Math.random() * n))
  //   }

  //   setPasswordValue(password)
  //   setModalVisible(true);
  // }


  return (
    <View style={styles.container}>

    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#E7A17A",
    justifyContent:'center',
    alignItems:'center'
  },
  logo:{
    marginBottom:40,
  },
  button:{
    flex:1,
    alignItems: 'center',
    marginTop:6,
    marginBottom:6,
    padding:8,
    borderRadius:40,
    backgroundColor:"#E19063",
    margin: 15,
    borderWidth: 1,
    borderColor:'#FFF'
},
  buttonText:{
    color:"#FFF",
    fontSize:16,
  },
  buttonRow:{
    flexDirection: "row",
    width:"91%",
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  emailEsenha:{
    borderRadius: 40,
    borderWidth: 1,
    borderColor:'#FFF',
    width:'85%',
    padding:12,
    marginTop:3
  },
  textInsert:{
    color:'#FFF',
    fontSize:16
  },
  underline: {
   textDecorationLine: 'underline'
  },
})