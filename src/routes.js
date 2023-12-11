import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home} from './pages/home'
import { MainPag } from './pages/main-start';
import { Settings, StyleSheet } from 'react-native';
import Signin from './pages/signin';
import Welcome from './pages/welcome'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function Routes(){
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
            component={Home}
            options={{
                headerShown:false,
            }}
            />
        </Stack.Navigator>
    )
}
