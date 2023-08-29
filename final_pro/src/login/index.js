import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useNavigation, } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './login';
import Register from './register';
import Home from '../home/index';

import styles from '../css/index';

const Stack = createNativeStackNavigator();

export default function LoginIndex () {
    const navigation = useNavigation();
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{...styles.screenOptions, 
                                                headerLeft: () => (
                                                    <TouchableOpacity                                    
                                                    onPress={() => drawer.current.openDrawer()}
                                                    >
                                                        <Icon name="bars" color="#000000" size={30} />
                                                    </TouchableOpacity>),}}>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/> 
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={Home} options={{ title: 'Anphu Engery' }}/>
        </Stack.Navigator>
    )
}