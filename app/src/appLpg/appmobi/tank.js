import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, TextInput, FlatList, Item, SafeAreaView, ScrollView} from 'react-native';
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
import dataTank from '../database/tank.json'
const newdata = dataTank;
const data = newdata.reverse();

const Tank = ({date, tank1, tank2, MW}) => (
    <View style={styles.row}>
        <View style={{...styles.view1}}>
            <Text style={{fontSize:15}}>{date}</Text>
        </View>
        <View style={{...styles.view1}}>
            <Text style={{fontSize:20}}>{tank1.Mw}</Text>
        </View>
        <View style={{...styles.view1}}>
            <Text style={{fontSize:20}}>{tank2.Mw}</Text>
        </View>
        <View style={{...styles.view1}}>
            <Text style={{fontSize:20, color: "red"}}>{MW}</Text>
        </View>
    </View>
  );


function TankAppMobi() {
    const navigation = useNavigation();
    return(
        <View style={styles.apphome}>
            <View style={styles.view1}>
                <View styles={{...styles.row,}}>
                    <View style={styles.view1}>
                        <Text style={{fontSize: 20, fontWeight: "600"}}>Gas bồn</Text>
                    </View>
                    <TouchableOpacity style={styles.view1}>
                        <Icon name="plus" color="#1E90FF" size={20} />
                    </TouchableOpacity>
                </View> 
            </View>
            <View styles={{...styles.view10,}}>
                <View style={styles.row}>
                    <View style={{...styles.view1,}}>
                        <Text style={{fontSize: 20, fontWeight: "600"}}>Ngày</Text>
                    </View>
                    <View style={{...styles.view1,}}>
                        <Text style={{fontSize: 20, fontWeight: "600"}}>Tank 1</Text>
                    </View>   
                    <View style={{...styles.view1,}}>
                        <Text style={{fontSize: 20, fontWeight: "600"}}>Tank 2</Text>
                    </View> 
                    <View style={{...styles.view1,}}>
                        <Text style={{fontSize: 20, fontWeight: "600"}}>Tổng</Text>
                    </View>               
                </View>
                <ScrollView>
                    <FlatList
                        data={data}
                        renderItem={({item}) => <Tank date={item.date} tank1={item.tank1} tank2={item.tank2} MW={item.MW}/>}
                        keyExtractor={item => item.date}
                    />
                </ScrollView>
            </View>
        </View>
    )
}

export default TankAppMobi;