import React from 'react';
import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../css/styles';
import style from '../css/index';

import dataTank from '../database/data/tank.json'
const newdata = dataTank;
const data = newdata.reverse();

const ItemTank = ({date, tank1, tank2, MW}) => (
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


function Tank() {
    const navigation = useNavigation();
    return(
        <View >
            
            <View styles={{...style.row, height:50, backgroundColor: "#FFFFCC"}}>
                <View style={{...styles.view1, width: 200}}>
                    <Text style={{fontSize: 20, fontWeight: "600"}}>Gas bồn</Text>
                </View>
                <TouchableOpacity style={{...styles.view1, width: 100}}>
                    <Icon name="plus" color="#1E90FF" size={20} />
                </TouchableOpacity>
            </View> 

            <View >
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
                        renderItem={({item}) => <ItemTank date={item.date} tank1={item.tank1} tank2={item.tank2} MW={item.MW}/>}
                        keyExtractor={item => item.date}
                    />
                </ScrollView>
            </View>
        </View>
    )
}

export default Tank;