import React from 'react';
import { useNavigation,} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from "react-native";




import styles from '../css/index';
import Login from '../login/login';
import Register from '../login/register';
import Total from './total';
import Tank from './tank';
import Chai from './chai';

const Tab = createBottomTabNavigator();

export default function Home() {
    const navigation = useNavigation()
    return (                    
        <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
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
            <Tab.Screen name="Tong" component={Total} screenOptions={{headerShown: 'flase'}}/>
            <Tab.Screen name="Chai" component={Chai}  />
            <Tab.Screen name="Tank" component={Tank} />
            {/* <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Register" component={Register} /> */}
        </Tab.Navigator>
    )

}