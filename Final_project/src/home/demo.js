import React from 'react';
import {View, Text, StatusBar, SafeAreaView, Button} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import styles from '../css/index';
import Login from '../login/index';
import Home from './index';


const Tab = createBottomTabNavigator();

export default function Demo() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{...styles.container}}>
            <Text style={{fontSize: 30}}>Demo</Text>
            <Button title="Go to Login" onPress={() => {
				navigation.navigate('Login')
			}} />        
        </SafeAreaView>
    )
}