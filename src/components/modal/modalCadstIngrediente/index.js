import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import { useState } from 'react';


export function ModalCadastroIngrediente({ handleClose }){
    const [nomeIngrediente, setNomeIngrediente] = useState('');

    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{flex:1, zIndex:9}} onPress={handleClose}></TouchableOpacity>
            <View style={styles.content}>
                    <View style={styles.headerModal}>
                        <Text style={[styles.title,styles.underline]}> Cadastre o ingrediente:</Text>
                            <TouchableOpacity style={styles.backButton} onPress={handleClose}>
                                    <Ionicons
                                        size={30} 
                                        color={'#FFF'}
                                        name='close-circle-outline'/>
                            </TouchableOpacity>
                    </View>
                <Text style={styles.subtitle}>Nome do Ingrediente</Text>
                    <TextInput
                        placeholder="Digite o ingrediente"
                        placeholderTextColor={'#F3F3FF'}
                        value={nomeIngrediente}
                        onChangeText={(value) => setNomeIngrediente(value)}
                        style={styles.input}/>
            </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'rgba(24,24,24,0.6)',
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    content:{
        backgroundColor:'#E06F72',
        height:'80%',
        width:'98%',
        borderRadius:24
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'#FFF',
        marginLeft:'2%',
        marginTop:'3%'
    },
    subtitle:{
        fontSize:18,
        fontWeight:'bold',
        color:'#F3F3FF',
        marginLeft:'2%',
        marginTop:'3%'  
    },
    input:{
        color:'#F3F3FF',
        borderBottomWidth:1,
        height:40,
        marginBottom:12,
        fontSize:16,
        borderBottomColor:'#DADADA'
    },
    backButton:{
        marginTop:'3%',
        marginRight:'5%',
    },
    headerModal:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    underline: {
        textDecorationLine: 'underline'
       },
})
