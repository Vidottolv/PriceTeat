import {NavigationContainer} from '@react-navigation/native'
import {Routes} from './src/routes'
import {StatusBar} from 'react-native'
import React from 'react'


export default function App(){
  return(
    <NavigationContainer>
        <Routes/>
    </NavigationContainer>
  )
}

