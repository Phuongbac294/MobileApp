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

import TotalAppMobi from './total';

const HomeAppMobiStack = createNativeStackNavigator();

function HomeAppMobi() {
    const navigation = useNavigation();
    const menu = useNavigation();
    return(
        <View style={styles.app}>            
            <View style={{...styles.view1, flexDirection:'row', padding:0}}>
                <TouchableOpacity style={{flex:1, alignItems:"flex-start"}}>
                    <Icon name="bars" color="#1E90FF" size={30} />
                </TouchableOpacity>
                <Text style={stylesText.h1}>Anphu Energy </Text>
                <TouchableOpacity style={{flex:1, alignItems:"flex-end"}}>
                    <Icon name="bell" color="#1E90FF" size={30} /> 
                </TouchableOpacity>
            </View>
            <View style={styles.view10}>
                <HomeAppMobiStack.Navigator>
                    <HomeAppMobiStack.Screen name="TotalAppMobi" component={TotalAppMobi}/>
                </HomeAppMobiStack.Navigator>
            </View>
            <View style={{...styles.view1, flexDirection:'row', padding:0}}>                 
                <TouchableOpacity style={{flex:1, alignItems:"center"}} onPress={() => {menu.navigate('TotalAppMobi')}}>
                    <Text style={{...stylesText.p1}}>Total</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1, alignItems:"center"}} onPress={() => {navigation.navigate('Tank')}}>
                    <Text style={{...stylesText.p1}}>Tank</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1, alignItems:"center"}} onPress={() => {navigation.navigate('Extra')}}>
                    <Text style={{...stylesText.p1}}>Extra</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1, alignItems:"center"}} onPress={() => {navigation.navigate('Trans')}}>
                    <Text style={{...stylesText.p1}}>Trans</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1, alignItems:"center"}} onPress={() => {navigation.navigate('Report')}}>
                    <Text style={{...stylesText.p1}}>Report</Text>
                </TouchableOpacity>
            </View>   
        </View>
    )
}

export default HomeAppMobi;