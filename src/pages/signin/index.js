import React from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Home } from "../home";

import { useNavigation } from "@react-navigation/native";
import * as animatable from 'react-native-animatable'

export default function Signin(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <animatable.View 
                animation={'fadeInLeft'}
                style={styles.containerHeader}>
                    <Text style={styles.message}>Bem Vindo(a)</Text>
            </animatable.View>

    <animatable.View animation={'fadeInUp'} style={styles.containerForm}>
        
        <Text style={styles.title}>E-Mail</Text>
        <TextInput
            placeholder="Digite seu E-Mail"
            placeholderTextColor={'#F3F3FF'}
            style={styles.input}/>

        <Text style={styles.title}>Senha</Text>
        <TextInput
            placeholder="Digite sua Senha"
            placeholderTextColor={'#F3F3FF'}
            style={styles.input}/>

        <TouchableOpacity style={styles.buttonForget}>
            <Text style={[styles.forgetText, styles.underline]}>Esqueceu a senha?</Text>
        </TouchableOpacity>    
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('home')}>
            <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
    
        <TouchableOpacity style={styles.buttonRegister}>
            <Text style={[styles.registerText, styles.underline]}>Novo por aqui? Cadastre-se</Text>
        </TouchableOpacity>

    </animatable.View>
    </View>
)}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#E7A17A',
        flex:1
    },
    containerHeader:{
        marginTop:'15%',
        marginBottom:'8%',
        paddingStart:'5%'
    },
    message:{
        fontSize:28,
        fontWeight:'bold',
        color:'#F3F3FF'
    },
    containerForm:{
        backgroundColor:'#E06F72',
        flex:1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%'
    },
    title:{
        color:'#F3F3FF',
        fontSize:20,
        marginTop:28,
        fontWeight:'bold'
    },
    input:{
        color:'#F3F3FF',
        borderBottomWidth:1,
        height:40,
        marginBottom:12,
        fontSize:16,
        borderBottomColor:'#DADADA'
    },
    button:{
        backgroundColor:'#E7A17A',
        borderRadius:4,
        paddingVertical:8,
        width:'100%',
        marginTop:14,
        justifyContent:'center',
        alignItems:'center'

    },
    buttonText:{
        color:'#F3F3FF',
        fontSize:16,
        fontWeight:'bold'
    },
    buttonRegister:{
        marginTop:14,
        alignSelf:'center',
    },
    registerText:{
        color:'#DADADA'
    },
    buttonForget:{
        color:'#F3F3FF',
        fontSize:16,
        fontWeight:'bold',
        marginTop:5,
        marginBottom:15,
        alignItems:'flex-end'
    },
    forgetText:{
        color:'#DADADA'
    },
    underline: {
        textDecorationLine: 'underline'
    }
})