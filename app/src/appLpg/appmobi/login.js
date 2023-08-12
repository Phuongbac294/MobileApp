import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, TextInput, FlatList, Item, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image} from 'react-native'

import styles from '../css/styles';
import stylesText from '../css/text';
import input from '../css/input';
import btn from '../css/btn';

function LoginAppMobi() {
    const navigation = useNavigation();
    return(
        <View style={styles.app}>
            <View style={{...styles.view2, justifyContent: "flex-end"}}>
                <View style = {styles.avata}>
                    <Image style = {styles.img}
                                source={require('../img/logo-AP-removebg-preview.png')} />
                </View>
            </View>
            <View style={styles.view1}>
                <Text style={stylesText.h1}>Welcome AnPhu </Text>
                <Text style={{...stylesText.p,color: '#808080'}}>Sign to continue</Text>
            </View>
            <View style={styles.view3}>
                <TextInput style={input.input} placeholder="UserEmail" />
                <TextInput style={input.input} placeholder="Password" />
            </View>
            <View style={{...styles.view1, alignSelf: "flex-end"}}>
                <TouchableOpacity>
                    <Text style={{...stylesText.p, color: '#FF00FF', paddingRight:0}}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.view1}>
                <TouchableOpacity style={{...btn.btn,}} onPress={() => {navigation.navigate('HomeAppMobi')}}>
                    <Text style={{fontSize:20, fontWeight: "600"}}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <View style={{...styles.view2, justifyContent:"flex-start"}}>
                <Text style={{...stylesText.p}}>Don't have account? 
                    <TouchableOpacity onPress={() => {navigation.navigate('Register')}}>
                        <Text style={{...stylesText.p,color: "#A0522D",}}> create a new account</Text>
                    </TouchableOpacity>
                </Text>
            </View>   
        </View>
    )
}

export default LoginAppMobi;