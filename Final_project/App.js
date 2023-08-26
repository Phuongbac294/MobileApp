if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, useNavigation, useRoute} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createContext } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


import Demo from './src/home/demo';
import LoginIndex from './src/login/index';
import Home from './src/home/index';
import Login from './src/login/login';
import Register from './src/login/register';
import Total from './src/home/total';
import Tank from './src/home/tank';
import Chai from './src/home/chai';


import styles from './src/css/index'



const AppComponent = createContext();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
 
  return (
    <AppComponent.Provider value={{}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Demo" screenOptions={styles.screenOptions}>
          <Stack.Screen name="Demo" component={Demo} screenOptions={{headerShown: 'flase'}}/>
          <Stack.Screen name="LoginIndex" component={LoginIndex} /> 
          <Stack.Screen name="Home" component={Home} options={{ title: 'Anphu Engery' }}/> 
          <Stack.Screen name="Login" component={Login}/> 
          <Stack.Screen name="Register" component={Register}/> 
          <Stack.Screen name="Total" component={Total}/>  
          <Stack.Screen name="Tank" component={Tank}/> 
          <Stack.Screen name="Chai" component={Chai}/> 
        </Stack.Navigator>        
      </NavigationContainer>
    </AppComponent.Provider>
  );
}


