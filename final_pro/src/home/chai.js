import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, TextInput, FlatList, Item, SafeAreaView, ScrollView, Modal, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';



import styles from '../css/index';

// const newdata = axios.get(`https://localhost:3000/chai/add`, );
// console.log('data', newdata);
// const data = newdata.reverse()
// const data = []

const newdata = [
    {
        date: "2023-08-01 17:00:00",
        LPG12: 300,
        LPG45: 400,
        MW: 21.600
    },
    {
        date: "2023-08-02 17:00:00",
        LPG12: 300,
        LPG45: 250,
        MW: 214.850
    },
    {
        date: "2023-08-03 17:00:00",
        LPG12: 300,
        LPG45: 350,
        MW: 19.350
    },
    {
        date: "2023-08-04 17:00:00",
        LPG12: 300,
        LPG45: 400,
        MW: 21.600
    },
    {
        date: "2023-08-05 17:00:00",
        LPG12: 300,
        LPG45: 250,
        MW: 14.850
    },
    {
        date: "2023-08-06 17:00:00",
        LPG12: 300,
        LPG45: 350,
        MW: 19.350
    },
    {
        date: "2023-08-07 17:00:00",
        LPG12: 300,
        LPG45: 400,
        MW: 21.600
    },
    {
        date: "2023-08-08 17:00:00",
        LPG12: 300,
        LPG45: 250,
        MW: 14.850
    },
    {
        date: "2023-08-09 17:00:00",
        LPG12: 300,
        LPG45: 350,
        MW: 19.350
    },
    {
        date: "2023-08-10 17:00:00",
        LPG12: 300,
        LPG45: 400,
        MW: 21.600
    },
    {
        date: "2023-08-11 17:00:00",
        LPG12: 300,
        LPG45: 250,
        MW: 14.850
    },
    {
        date: "2023-08-12 17:00:00",
        LPG12: 300,
        LPG45: 350,
        MW: 19.350
    },
    {
        date: "2023-08-13 17:00:00",
        LPG12: 300,
        LPG45: 400,
        MW: 21.600
    },
    {
        date: "2023-08-14 17:00:00",
        LPG12: 300,
        LPG45: 250,
        MW: 14.850
    },
    {
        date: "2023-08-15 17:00:00",
        LPG12: 300,
        LPG45: 350,
        MW: 19.350
    },
    {
        date: "2023-08-16 17:00:00",
        LPG12: 300,
        LPG45: 400,
        MW: 21.600
    },
    {
        date: "2023-08-17 17:00:00",
        LPG12: 300,
        LPG45: 250,
        MW: 14.850
    },
    {
        date: "2023-08-18 17:00:00",
        LPG12: 300,
        LPG45: 350,
        MW: 19.350
    },
    {
        date: "2023-08-19 17:00:00",
        LPG12: 300,
        LPG45: 400,
        MW: 21.600
    },
    {
        date: "2023-08-20 17:00:00",
        LPG12: 300,
        LPG45: 250,
        MW: 14.850
    },
    {
        date: "2023-08-21 17:00:00",
        LPG12: 300,
        LPG45: 350,
        MW: 19.350
    },
    {
        date: "2023-08-22 17:00:00",
        LPG12: 300,
        LPG45: 400,
        MW: 21.600
    },
    {
        date: "2023-08-23 17:00:00",
        LPG12: 300,
        LPG45: 250,
        MW: 14.850
    },
    {
        date: "2023-08-24 17:00:00",
        LPG12: 300,
        LPG45: 350,
        MW: 19.350
    }
]
const data = newdata.reverse()

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
    const newChai = [
        {
            date: "2023-08-01 17:00:00",
            LPG12: 300,
            LPG45: 400,
            MW: 21.600
        },
        {
            date: "2023-08-02 17:00:00",
            LPG12: 300,
            LPG45: 250,
            MW: 214.850
        },
        {
            date: "2023-08-03 17:00:00",
            LPG12: 300,
            LPG45: 350,
            MW: 19.350
        },
        {
            date: "2023-08-04 17:00:00",
            LPG12: 300,
            LPG45: 400,
            MW: 21.600
        },
        {
            date: "2023-08-05 17:00:00",
            LPG12: 300,
            LPG45: 250,
            MW: 14.850
        },
        {
            date: "2023-08-06 17:00:00",
            LPG12: 300,
            LPG45: 350,
            MW: 19.350
        },
        {
            date: "2023-08-07 17:00:00",
            LPG12: 300,
            LPG45: 400,
            MW: 21.600
        },
        {
            date: "2023-08-08 17:00:00",
            LPG12: 300,
            LPG45: 250,
            MW: 14.850
        },
        {
            date: "2023-08-09 17:00:00",
            LPG12: 300,
            LPG45: 350,
            MW: 19.350
        },
        {
            date: "2023-08-10 17:00:00",
            LPG12: 300,
            LPG45: 400,
            MW: 21.600
        },
        {
            date: "2023-08-11 17:00:00",
            LPG12: 300,
            LPG45: 250,
            MW: 14.850
        },
        {
            date: "2023-08-12 17:00:00",
            LPG12: 300,
            LPG45: 350,
            MW: 19.350
        },
        {
            date: "2023-08-13 17:00:00",
            LPG12: 300,
            LPG45: 400,
            MW: 21.600
        },
        {
            date: "2023-08-14 17:00:00",
            LPG12: 300,
            LPG45: 250,
            MW: 14.850
        },
        {
            date: "2023-08-15 17:00:00",
            LPG12: 300,
            LPG45: 350,
            MW: 19.350
        },
        {
            date: "2023-08-16 17:00:00",
            LPG12: 300,
            LPG45: 400,
            MW: 21.600
        },
        {
            date: "2023-08-17 17:00:00",
            LPG12: 300,
            LPG45: 250,
            MW: 14.850
        },
        {
            date: "2023-08-18 17:00:00",
            LPG12: 300,
            LPG45: 350,
            MW: 19.350
        },
        {
            date: "2023-08-19 17:00:00",
            LPG12: 300,
            LPG45: 400,
            MW: 21.600
        },
        {
            date: "2023-08-20 17:00:00",
            LPG12: 300,
            LPG45: 250,
            MW: 14.850
        },
        {
            date: "2023-08-21 17:00:00",
            LPG12: 300,
            LPG45: 350,
            MW: 19.350
        },
        {
            date: "2023-08-22 17:00:00",
            LPG12: 300,
            LPG45: 400,
            MW: 21.600
        },
        {
            date: "2023-08-23 17:00:00",
            LPG12: 300,
            LPG45: 250,
            MW: 14.850
        },
        {
            date: "2023-08-24 17:00:00",
            LPG12: 300,
            LPG45: 350,
            MW: 19.350
        }
    ]
    const data = newChai.reverse()

    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = React.useState(false);
    const [lpg12, setLpg12] = React.useState(0);
    const [lpg45, setLpg45] = React.useState(0);
    const today = new Date()
    const newdate = today.getFullYear() + ' ' + (today.getMonth()+1) + ' ' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
    const HandlerChai = () => {
        const newData = {
            date: newdate,
            LPG12: lpg12,
            LPG45: lpg45,
            MW: (lpg12*12 + lpg45*45) / 1000
        }
        console.log(newData);
        newChai.push(newData);
        setModalVisible(!modalVisible)
        setLpg12(0)
        setLpg45(0)
        console.log(newChai);
    }

    const ModalChai = () => {
        return (
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        
                        <Text style={{...styles.text_h_20}}>Nhập số liệu chiết nạp</Text>
                    
                        <View style={{...styles.input, }}>
                            <Text style={styles.input_text_25}>Bình 12 kg</Text>                        
                            <TextInput style={{...styles.input_text_25, backgroundColor: "#ffffff"}} type='string' placeholder="Nhập số bình" value={lpg12} onChangeText={e=> setLpg12(e)}/>
                        </View>
                        <View style={{...styles.input, }}>
                            <Text style={styles.input_text_25}>Bình 45 kg</Text>                        
                            <TextInput style={{...styles.input_text_25, backgroundColor: "#ffffff"}}  type='string' placeholder="Nhập số bình"  value={lpg45} onChangeText={e=> setLpg45(e)}/>
                        </View>
                        <TouchableOpacity
                        style={{...styles.btn}}
                        onPress={() => HandlerChai()}>
                        <Text style={styles.text_h_20}>CẬP NHẬP</Text>
                        </TouchableOpacity>
                        <Pressable
                        style={{...styles.btn, backgroundColor: "#00FFFF"}}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.text_h_20}>BỎ QUA</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        )
    }

    const Menu = () => {
        return (
            <View >
                <View style={{...styles.row, height: 50, backgroundColor: "#FFFFCC"}}>
                    <View style={{...styles.col_1, alignItems: "flex-start", paddingLeft: 10}}>
                        <Text style={{fontSize: 20, fontWeight: "600"}}>Chiết nạp</Text>
                    </View>
                    <TouchableOpacity style={{...styles.col_1, alignItems: "flex-end", paddingRight: 10}} onPress={() => setModalVisible(!modalVisible)}>
                        <Icon name="plus" color="#1E90FF" size={20} />
                    </TouchableOpacity>
                </View> 
            </View>
        )
    }

    const MenuList = () => {
        return (
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
        )
    }


    return(
        <SafeAreaView >
            <Menu/>
            <ModalChai/>   

            <View style={{...styles.contai, paddingLeft: 5, paddingRight: 5}}>
                <MenuList/>

                <View style={{...styles.scrollView_h570}} >
                    <FlatList
                        data={data}
                        renderItem={({item}) => <ItemChai date={item.date} LPG12={item.LPG12} LPG45={item.LPG45} MW={item.MW}/>}
                        keyExtractor={item => item.date}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Chai;