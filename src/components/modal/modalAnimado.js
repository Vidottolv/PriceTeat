import React, { useRef } from 'react'
import {Text, View, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize'

export default function ModalAnimado(){
    const modalizeRef = useRef();

    function onOpen (){
        modalizeRef.current?.open();
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={onOpen}>
                <Text>abrir</Text>
            </TouchableOpacity>
        <Modalize
            ref={modalizeRef}
            snapPoint={180}>
            <View style={{flex:1, height:180, flexDirection:'row', justifyContent:'center', backgroundColor:'#000'}}>
                <Text>abriu</Text>
            </View>

        </Modalize>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent:'center'
    }
})