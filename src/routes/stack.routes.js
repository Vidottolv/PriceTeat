import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { MainPag } from '../pages/main-start';
import { Settings, StyleSheet } from 'react-native';
import Signin from '../pages/signin';
import Welcome from '../pages/welcome'
import TabRoutes from './tab.routes';
import CadastroUser from '../pages/cadastro';
import ModalAnimado from '../components/modal/modalAnimado';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Cadastros } from '../pages/home/cadastros';


const Stack = createNativeStackNavigator();

export function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="welcome"
            component={Welcome}
            options={{
                headerShown:false,
            }}
            />
            <Stack.Screen
            name="signin"
            component={Signin}
            options={{
                headerShown:false,
            }}
            />
            <Stack.Screen
            name="home"
            component={TabRoutes}
            options={{
                headerShown:false,
            }}
            />
            <Stack.Screen
            name="cadastroUsuario"
            component={CadastroUser}
            options={{
                headerShown:false,
            }}
            />
            <Stack.Screen
            name="modalAnimado"
            component={ModalAnimado}
            options={{
                headerShown:false,
            }}
            />
        </Stack.Navigator>
    )
}
