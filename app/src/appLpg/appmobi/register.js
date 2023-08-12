import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, TextInput, FlatList, Item, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../css/styles';
import stylesText from '../css/text';
import input from '../css/input';
import btn from '../css/btn';

function RegisterAppMobi() {
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
                <Text style={stylesText.h1}>Create Account </Text>
                <Text style={{...stylesText.p,color: '#808080'}}>Create a new account</Text>
            </View>
            <View style={styles.view3}>
                <TextInput style={input.input} placeholder="Email" />
                <TextInput style={input.input} placeholder="Password" />
                <TextInput style={input.input} placeholder="ConfirmPassword" />
            </View>            
            <View style={styles.view2}>
                <TouchableOpacity style={{...btn.btn,}}>
                    <Text style={{fontSize:20, fontWeight: "600"}}>REGISTER</Text>
                </TouchableOpacity>
            </View>
            <View style={{...styles.view1, flexDirection:'row', justifyContent: "space-between"}}>
                <TouchableOpacity style={{...styles.viewlogo,}}>
                    <Icon name="google" color="#1E90FF" size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.viewlogo,}}>
                    <Icon name="facebook" color="#FF00FF" size={30} />
                </TouchableOpacity>
            </View>             
        </View>
    )
}

export default RegisterAppMobi;