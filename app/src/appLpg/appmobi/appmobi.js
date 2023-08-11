import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, TextInput, FlatList, Item, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Image} from 'react-native'
import styles from '../css/styles';
import stylesText from '../css/text';


import LoginAppMobi from './login';
import Register from './register';

const AppMobiStack = createNativeStackNavigator();

function Mobi() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style = {styles.app} onPress={() => {navigation.navigate('LoginAppMobi')}}>            
            <View style = {styles.app_1}>
                <View style = {styles.item}>
                    <Text style={stylesText.h1}>LPG</Text>
                </View>
                <View style = {{...styles.item, marginBottom: -30, backgroundColor:'#FFBBFF'}}>
                    <Text style={stylesText.h1}>CNG</Text>
                </View>
            </View>
            <View style = {styles.app_1}>                
                <View style = {styles.logo}>                        
                        <Image style = {styles.img}
                            source={require('../img/logo-AP-removebg-preview.png')} />
                </View>
            </View>
            <View style = {styles.app_1}>
                <View style = {{...styles.item, marginTop: -30, backgroundColor:'#FFC0CB'}}>
                    <Text style={stylesText.h1}>LNG</Text>
                </View>
                <View style = {{...styles.item, marginTop: -10, backgroundColor:'#BFEFFF'}}>
                    <Text style={stylesText.h1}>BUILD</Text>
                </View>
            </View>            
        </TouchableOpacity>
    )
}

function AppMobi() {
    return (
        <AppMobiStack.Navigator>
            <AppMobiStack.Screen name="AppMobi" component={Mobi} />
            <AppMobiStack.Screen name="LoginAppMobi" component={LoginAppMobi}/>
            <AppMobiStack.Screen name="Register" component={Register}/>
        </AppMobiStack.Navigator>
    )
}

export default AppMobi;