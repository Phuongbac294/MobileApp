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
    return(
        <View style={styles.app}>
            <Image style = {styles.img}
                            source={require('../img/logo-AP-removebg-preview.png')} />
            <Text style={stylesText.h1}>Welcome AnPhu </Text>
            <Text style={stylesText.p1}>Sign to continue</Text>
            <TextInput style={input.input} placeholder="UserEmail" />
            <TextInput style={input.input} placeholder="Password" />
            <Text style={stylesText.h3}>Forgot Password</Text>
            <Button style={btn.btn} title="LOGIN" onPress={() => {}} />
            <Text style={stylesText.p}>Don't have account? <Text style={stylesText.p}>create a new account</Text></Text>
        </View>
    )
}

export default LoginAppMobi;