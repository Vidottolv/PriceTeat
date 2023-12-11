import { React ,useState } from 'react'
import { View, SafeAreaView, Text, StyleSheet, Image, TouchableOpacity, Modal, TextInput }from 'react-native'
import Slider from '@react-native-community/slider'
//import {ModalPassword} from "../../components/modal"

import {Ionicons} from '@expo/vector-icons'

export function Home(){
  return (
    <View style={styles.container}>
      <View style={styles.containerRecipes}>
        <Text style={[styles.title, styles.underline]}>Cadastrar Ingredientes</Text>
        <Text style={styles.textCompound}>
          Aqui, você poderá cadastrar todos os ingredientes utilizados em seu restaurante
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.containerRecipes}>
        <Text style={[styles.title, styles.underline]}>Cadastrar Receitar</Text>
        <Text style={styles.textCompound}>
          Aqui, você poderá cadastrar todas as suas receitas
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.containerRecipes}>
        <Text style={[styles.title, styles.underline]}>Consultar Ingredientes</Text>
        <Text style={styles.textCompound}>
          Aba destinada para a consulta dos seus ingredientes 
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Consultar</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.containerRecipes}>
        <Text style={[styles.title, styles.underline]}>Consultar Receitas</Text>
        <Text style={styles.textCompound}>
        Aba destinada para a consulta das suas receitas 
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Consultar</Text>
        </TouchableOpacity>
      </View>
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
  containerRecipes:{
    height:'20%',
    width:'90%',
    borderWidth:1,
    borderRadius:16,
    margin:4,
    borderColor:'#FFF'
  },
  title:{
    fontSize:24,
    color:'#FFF',
    marginLeft:'4%',
    marginTop:'3%'
  },
  textCompound:{
    fontSize:16,
    color:'#FFF',
    marginLeft:'8%',
    marginTop:'1%'
  },
  button:{
    height:35,
    alignItems: 'center',
    marginTop:40,
    marginBottom:6,
    padding:5,
    borderRadius:40,
    backgroundColor:"#E19063",
    margin: '20%',
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
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  emailEsenha:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderRadius: 40,
    borderWidth: 1,
    borderColor:'#FFF',
    width:'85%',
    padding:15,
    marginTop:5
  },
  esqSenhaBtn:{
    marginRight:-180,
    marginTop:10,
    marginBottom:10
  },
  textInsert:{
    color:'#FFF',
    fontSize:16
  },
  underline: {
   textDecorationLine: 'underline'
  },
})