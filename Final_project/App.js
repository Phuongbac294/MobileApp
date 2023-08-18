import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, useNavigation, useRoute} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createContext } from 'react';


import Demo from './src/home/demo';
import LoginIndex from './src/login/index';
import Home from './src/home/index';
import Total from './src/home/total';

import styles from './src/css/index'



const AppComponent = createContext();
const Stack = createNativeStackNavigator();

export default function App() {
  // const navigation = useNavigation()
  return (
    <AppComponent.Provider value={{}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Demo" screenOptions={styles.screenOptions}>
          <Stack.Screen name="Demo" component={Demo} options={{ title: 'My home' }}/>
          <Stack.Screen name="Login" component={LoginIndex} /> 
          <Stack.Screen name="Home" component={Home} />  
          <Stack.Screen name="Total" component={Total} />                  
        </Stack.Navigator>
      </NavigationContainer>
    </AppComponent.Provider>
  );
}


