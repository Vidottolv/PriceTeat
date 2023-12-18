import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import { useState } from 'react';
import * as animatable from 'react-native-animatable'
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

export function ModalCadastroIngrediente({ handleClose }){
    const [nomeIng, setNomeIng] = useState('');
    const [qtdIng, setQtdIng] = useState();
    const [precoIng, setPrecoIng] = useState();
    const [tamEmbalIng, setTamEmbalIng] = useState();
    const [current, setCurrent] = useState(2);

    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{flex:1, zIndex:9}} onPress={handleClose}></TouchableOpacity>
            <animatable.View animation={'fadeInUpBig'} style={styles.content}>
                    <View style={styles.headerModal}>
                        <Text style={[styles.title,styles.underline]}>Cadastrar ingrediente</Text>
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
                        value={nomeIng}
                        onChangeText={(value) => setNomeIng(value)}
                        style={styles.input}/>
                <Text style={styles.subtitle}>Unidade de Medida</Text>
                <RadioButtonGroup
                    containerStyle={styles.radioGroup}
                    selected={current}
                    onSelected={(value) => setCurrent(value)}
                    radioBackground="black">
                        <RadioButtonItem value='1' label={<Text style={styles.textRadio}> Kilos (Kg)</Text>} style={styles.radio}/>
                        <RadioButtonItem value='2' label={<Text style={styles.textRadio}> Gramas (g)</Text>} style={styles.radio}/>
                        <RadioButtonItem value='3' label={<Text style={styles.textRadio}> Litros (Lt)</Text>} style={styles.radio}/>
                        <RadioButtonItem value='4' label={<Text style={styles.textRadio}> Mililitros (Ml)</Text>} style={styles.radio}/>
                        <RadioButtonItem value='5' label={<Text style={styles.textRadio}> Unidade (Un)</Text>} style={styles.radio}/>
                </RadioButtonGroup>
                <Text style={styles.subtitle}>Quantidade usada</Text>
                    <TextInput
                        placeholder="Digite a quantidade"
                        placeholderTextColor={'#F3F3FF'}
                        value={qtdIng}
                        onChangeText={(value) => setQtdIng(value)}
                        style={styles.input}/>
                <Text style={styles.subtitle}>Preço pago</Text>
                    <TextInput
                        placeholder="Digite a quantidade"
                        placeholderTextColor={'#F3F3FF'}
                        value={precoIng}
                        onChangeText={(value) => setPrecoIng(value)}
                        style={styles.input}/>
                <Text style={styles.subtitle}>Tamanho da embalagem</Text>
                <Text style={styles.rodape}>** Cadastre qual o tamanho da embalagem do seu ingrediente, usando a mesma unidade de medida que foi selecionada acima.</Text>
                    <TextInput
                        placeholder="Digite a quantidade"
                        placeholderTextColor={'#F3F3FF'}
                        value={tamEmbalIng}
                        onChangeText={(value) => setTamEmbalIng(value)}
                        style={styles.input}/>
            </animatable.View>
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
        borderRadius:24,
        paddingStart:'5%',
        paddingEnd:'5%',
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'#FFF',
        marginLeft:'2%',
        marginTop:'3%'
    },
    subtitle:{
        fontSize:20,
        fontWeight:'bold',
        color:'#F3F3FF',
        marginTop:'4%'  
    },
    input:{
        color:'#F3F3FF',
        borderBottomWidth:1,
        height:40,
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
    radioGroup:{ 
        marginTop: 10
    },
    radio:{
        borderColor:'#FFF',
        marginTop:2,
    },
    textRadio:{
        color:'#FFF', 
        fontWeight:'bold'
    },
    rodape:{
        fontSize: 10,
        color:'#FFF'
    }
})
