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


function TotalAppMobi() {
    const navigation = useNavigation();
    return(
        <View style={styles.apphome}>
            <View styles={{...styles.view1,}}>
                <Text style={styles.p}>Tổng hàng</Text>
            </View> 
            <View styles={{...styles.view1,}}>
                <View style={styles.view1}>
                    <Text>Tình hình giao nhận</Text>
                    <Text style={styles.p}>Tháng này
                        <TouchableOpacity style={{...styles.viewlogo,}}>
                            <Icon name="chevron-down" color="#1E90FF" size={30} />
                        </TouchableOpacity>
                    </Text>                    
                </View>
                <View style={styles.view3}>
                    <View style={styles.row1}>
                        <Text>biểu đồ</Text>
                    </View>
                    <View style={styles.row2}>
                        <Text>Nhập</Text>
                        <Text>Xuất</Text>
                    </View>
                    <View style={styles.view3}>
                    <View style={styles.row1}>
                        <Text>biểu đồ</Text>
                    </View>
                    <View style={styles.row2}>
                        <Text>Nhập</Text>
                        <Text>Xuất</Text>
                    </View>
                </View>
                </View>
            </View>
        </View>
    )
}

export default TotalAppMobi;