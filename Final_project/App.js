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
  // const navigation = useNavigation()
  return (
    <AppComponent.Provider value={{}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Demo" screenOptions={styles.screenOptions}>
          <Stack.Screen name="Demo" component={Demo} screenOptions={{headerShown: 'flase'}}/>
          <Stack.Screen name="LoginIndex" component={LoginIndex} /> 
          <Stack.Screen name="Home" component={Home} options={{ title: 'Anphu Engery' }}/> 
          <Stack.Screen name="Login" component={Login} screenOptions={{headerShown: 'flase'}} /> 
          <Stack.Screen name="Register" component={Register} screenOptions={{headerShown: 'flase'}}/> 
          <Stack.Screen name="Total" component={Total} screenOptions={{headerShown: 'flase'}}/>  
          <Stack.Screen name="Tank" component={Tank} screenOptions={{headerShown: 'flase'}}/> 
          <Stack.Screen name="Chai" component={Chai} screenOptions={{headerShown: 'flase'}}/> 
        </Stack.Navigator>
        {/* <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                
                if (route.name === 'Chai') {
                    iconName = 'filter'
                } else if (route.name === 'Tong') {
                    iconName = 'user'
                } else if (route.name === 'Register') {
                    iconName = 'registered'
                } else if (route.name === 'Tank') {
                    iconName = 'cloud'
                }
                else if (route.name === 'Setting') {
                    iconName = 'gear'
                }
                // You can return any component that you like here!
                return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#00FFFF',
                tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name="Tong" component={Total} />
            <Tab.Screen name="Chai" component={Chai} />
            <Tab.Screen name="Tank" component={Tank} />
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Register" component={Register} />
        </Tab.Navigator> */}
      </NavigationContainer>
    </AppComponent.Provider>
  );
}


