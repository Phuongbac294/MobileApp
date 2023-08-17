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

function MenuApp () {
    <View style={{...styles.view1, flexDirection:'row', padding:0}}>
        <TouchableOpacity style={{flex:1, alignItems:"flex-start"}}>
            <Icon name="bars" color="#1E90FF" size={30} />
        </TouchableOpacity>
        <Text style={stylesText.h1}>Anphu Energy </Text>
        <TouchableOpacity style={{flex:1, alignItems:"flex-end"}}>
            <Icon name="bell" color="#1E90FF" size={30} /> 
        </TouchableOpacity>
    </View>
}

export default MenuApp;