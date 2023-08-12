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

function TotalAppMobi() {
    const navigation = useNavigation();
    return(
        <View style={styles.app}>
           <Text>Total</Text>  
        </View>
    )
}

export default TotalAppMobi;