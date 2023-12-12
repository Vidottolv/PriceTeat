import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Cadastros} from '../pages/home/cadastros'
import {Consultas} from '../pages/home/consultas'
import {Ionicons} from '@expo/vector-icons'
import { StyleSheet } from "react-native";


const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
            name='Cadastros'
            component={Cadastros}
            options={{
                headerStyle: {backgroundColor:'#E7A17A'},
                tabBarStyle:{backgroundColor:'#E06F72'},
                tabBarShowLabel:false,
                headerTitleStyle:{
                    color:'#FFF'
                },
                tabBarIcon: ({focused}) => {
                    if(focused){
                        return <Ionicons 
                                size={25} 
                                color={'#FFF'} 
                                name="create-outline"/>
                    }
                    return <Ionicons 
                            size={25} 
                            color={'#DADADA'} 
                            name="create-outline"/>
                },
            }}
            />
            <Tab.Screen
            name='Consultas'
            component={Consultas}
            options={{
                headerStyle: {backgroundColor:'#E7A17A'},
                tabBarStyle: {backgroundColor:'#E06F72'},
                tabBarShowLabel:false,
                headerTitleStyle:{
                    color:'#FFF'
                },
                tabBarIcon: ({focused}) => {
                    if(focused){
                        return <Ionicons size={25}
                                color={'#FFF'} 
                                name="file-tray-full-outline"/>
                    }
                    return <Ionicons size={25} 
                            color={'#DADADA'} 
                            name="file-tray-full-outline"/>
                },
            }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar:{
        color:'#F3F3FF'
    }
})