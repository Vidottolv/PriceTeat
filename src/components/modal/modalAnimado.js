import {StyleSheet, Text, View, TouchableOpacity, Modal, Alert} from 'react-native';
import {useState} from 'react'
import {ActionModal} from './teste' 

export default function ModalAnimado(){
    const [visibleModal, setVisibleModal] = useState(false);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Sujeito Programador</Text>            
        
        <TouchableOpacity style={styles.button} onPress={()=> setVisibleModal(true)}>
            <Text>Abrir</Text>
        </TouchableOpacity>

        <Modal
        visible={visibleModal}
        transparent={true}
        onRequestClose={() => setVisibleModal(false)}
        > 
            <ActionModal
                handleClose={() => setVisibleModal(false)}
                handleEdit={() => Alert.alert('clicou no edit')}
                handleDelete={() => Alert.alert('clicou no delete')}
            />
        </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#12131B',
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        color:'#FFF',
        fontSize:24,
        fontWeight:'bold',
    },
    button:{
        backgroundColor:'#FFF',
        padding:4,
        marginVertical:8,
        width:'70%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 4,
    }
})