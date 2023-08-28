import {NavigationContainer,} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createContext } from 'react';


import styles from './src/css/index'

import Login from './src/login/login';
import Register from './src/login/register';
import Home from './src/home/index';
import Total from './src/home/total';
import Tank from './src/home/tank';
import Chai from './src/home/chai';



// const AppComponent = createContext();
const Stack = createNativeStackNavigator();

export default function App() {
 
  return (
    // <AppComponent.Provider >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={styles.screenOptions}>
          {/* <Stack.Screen name="Demo" component={Demo} screenOptions={{headerShown: 'flase'}}/> */}
          {/* <Stack.Screen name="LoginIndex" component={LoginIndex} />  */}
          <Stack.Screen name="Home" component={Home} options={{ title: 'Anphu Engery' }}/> 
          <Stack.Screen name="Login" component={Login} screenOptions={{headerShown: 'false'}}/> 
          <Stack.Screen name="Register" component={Register}/> 
          {/* <Stack.Screen name="Total" component={Total}/>   */}
          {/* <Stack.Screen name="Tank" component={Tank}/>  */}
          {/* <Stack.Screen name="Chai" component={Chai}/>  */}
        </Stack.Navigator>        
      </NavigationContainer>
    // </AppComponent.Provider>
  );
}
