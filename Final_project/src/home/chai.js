import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, TextInput, FlatList, Item, SafeAreaView, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../css/index';
import dataTank from '../database/data/chai.json';
const newdata = dataTank;
const data = newdata.reverse();

const ItemChai = ({date, LPG12, LPG45, MW}) => (
    <View style={{...styles.row, }}>
        <View style={{...styles.itemList}}>
            <Text style={{fontSize:15}}>{date}</Text>
        </View>
        <View style={{...styles.itemList}}>
            <Text style={{fontSize:20}}>{LPG12}</Text>
        </View>
        <View style={{...styles.itemList}}>
            <Text style={{fontSize:20}}>{LPG45}</Text>
        </View>
        <View style={{...styles.itemList}}>
            <Text style={{fontSize:20, color: "red"}}>{MW}</Text>
        </View>
    </View>
  );


function Chai() {
    const navigation = useNavigation();
    return(
        <View >
            <View >
                <View style={{...styles.row, height: 50, backgroundColor: "#FFFFCC"}}>
                    <View style={{...styles.col_1, alignItems: "flex-start", paddingLeft: 10}}>
                        <Text style={{fontSize: 20, fontWeight: "600"}}>Chiết nạp</Text>
                    </View>
                    <TouchableOpacity style={{...styles.col_1, alignItems: "flex-end", paddingRight: 10}}>
                        <Icon name="plus" color="#1E90FF" size={20} />
                    </TouchableOpacity>
                </View> 
            </View>
            <View style={{...styles.contai, paddingLeft: 5, paddingRight: 5}}>
                <View style={styles.row}>
                    <View style={{...styles.col_1,}}>
                        <Text style={{fontSize: 20, fontWeight: "600"}}>Ngày</Text>
                    </View>
                    <View style={{...styles.col_1,}}>
                        <Text style={{fontSize: 20, fontWeight: "600"}}>Bình 12</Text>
                    </View>   
                    <View style={{...styles.col_1,}}>
                        <Text style={{fontSize: 20, fontWeight: "600"}}>Bình 45</Text>
                    </View> 
                    <View style={{...styles.col_1,}}>
                        <Text style={{fontSize: 20, fontWeight: "600"}}>Tổng</Text>
                    </View>               
                </View>
                <ScrollView >
                    <FlatList
                        data={data}
                        renderItem={({item}) => <ItemChai date={item.date} LPG12={item.LPG12} LPG45={item.LPG45} MW={item.MW}/>}
                        keyExtractor={item => item.date}
                    />
                </ScrollView>
            </View>
        </View>
    )
}

export default Chai;