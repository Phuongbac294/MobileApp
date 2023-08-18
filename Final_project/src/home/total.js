import React from "react";
import {StyleSheet, View, Text, Button, TouchableOpacity, TextInput, FlatList, Item, SafeAreaView, ScrollView} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../css/index';
import dataTotal from '../database/data/total.json';

const data = dataTotal;
const newData = data.reverse();

// const ItemTotal = ({date, tanks, LPG12, LPG45}) => (
//     <View style={styles.row}>
//         <View style={{...styles.col_1}}>
//             <Text style={{fontSize:15}}>{date}</Text>
//         </View>
//         <View style={{...styles.col_1}}>
//             <Text style={{fontSize:20, color: "#FF00FF"}}>{tanks}</Text>
//         </View>
//         <View style={{...styles.col_1}}>
//             <Text style={{fontSize:20, color: "blue"}}>{LPG12}</Text>
//         </View>
//         <View style={{...styles.col_1}}>
//             <Text style={{fontSize:20, color: "red"}}>{LPG45}</Text>
//         </View>
//     </View>
//   );

function Total() {
    const navigation = useNavigation();
    return(
        <SafeAreaView style={styles.container}>
            
            <View styles={{height: 30, flexDirection: "row"}}>
                <View style={{width:300, margin:0}}>
                    <Text style={{...styles.text_h_20}}>Tổng hợp kho An Phú</Text>
                </View>
                <TouchableOpacity style={{width:50, margin:0}}>
                    <Icon name="plus" color="#1E90FF" size={20} />
                </TouchableOpacity>
            </View> 
            
            <View styles={{...styles.col,}}>
                <View style={{...styles.row_1, height: 30}}>
                    <View style={{...styles.col,}}>
                        <Text style={{...styles.text_h_20}}>Ngày</Text>
                    </View>
                    <View style={{...styles.col,}}>
                        <Text style={{...styles.text_h_20}}>Tank</Text>
                    </View>   
                    <View style={{...styles.col, }}>
                        <Text style={{...styles.text_h_20}}>LPG12</Text>
                    </View> 
                    <View style={{...styles.col, }}>
                        <Text style={{...styles.text_h_20}}>LPG45</Text>
                    </View>               
                </View>

                {/* <ScrollView>
                    <FlatList
                        data={newData}
                        renderItem={({item}) => <ItemTotal date={item.date} tanks={item.tanks} LPG12={item.LPG12} LPG45={item.LPG45}/>}
                        keyExtractor={item => item.date}
                    />
                </ScrollView> */}
            </View>

        </SafeAreaView>
    )
}

export default Total;