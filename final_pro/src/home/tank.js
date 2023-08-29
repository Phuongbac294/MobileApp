import React from 'react';

import {StyleSheet, View, Text, Button, TouchableOpacity, TextInput, FlatList, Item, SafeAreaView, ScrollView, Modal, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../css/index';
import dataTank from '../database/data/tank.json';

const newdata = dataTank;
const data = newdata.reverse();

// const data = []
const HandlerTank = () => {

}

const ItemTank = ({date, tank1, tank2, MW}) => (
    <View style={{...styles.row, }}>
        <View style={{...styles.itemList}}>
            <Text style={{fontSize:15}}>{date}</Text>
        </View>
        <View style={{...styles.itemList}}>
            <Text style={{fontSize:20}}>{tank1.Mw}</Text>
        </View>
        <View style={{...styles.itemList}}>
            <Text style={{fontSize:20}}>{tank2.Mw}</Text>
        </View>
        <View style={{...styles.itemList}}>
            <Text style={{fontSize:20, color: "red"}}>{MW}</Text>
        </View>
    </View>
  );



function Tank() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = React.useState(false);
    const [level1, setLevel1] = React.useState('');
    const [temp1, setTemp1] = React.useState('');
    const [pre1, setPre1] = React.useState('');
    const [level2, setLevel2] = React.useState('');
    const [temp2, setTemp2] = React.useState('');
    const [pre2, setPre2] = React.useState('');

    const ModalTank = () => {
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
                        <Text style={{...styles.text_h_20}}>Nhập số liệu bồn 1</Text>
                        <View style={{...styles.input, }}>
                            <Text style={styles.input_text_25}>Mức bồn</Text>                        
                            <TextInput style={{...styles.input_text_25, backgroundColor: "#ffffff"}} placeholder="Nhập số đo" value={level1} onChangeText={e=> setLevel1(e)}/>
                        </View>
                        <View style={{...styles.input, }}>
                            <Text style={styles.input_text_25}>Nhiệt độ bồn</Text>                        
                            <TextInput style={{...styles.input_text_25, backgroundColor: "#ffffff"}} placeholder="Nhập số đo" value={temp1} onChangeText={e=> setTemp1(e)}/>
                        </View>
                        <View style={{...styles.input, }}>
                            <Text style={styles.input_text_25}>Áp suất bồn</Text>                        
                            <TextInput style={{...styles.input_text_25, backgroundColor: "#ffffff"}} placeholder="Nhập số đo" value={pre1} onChangeText={e=> setPre1(e)}/>
                        </View>
                    </View>

                    <View style={styles.modalView}>
                        <Text style={{...styles.text_h_20}}>Nhập số liệu bồn 2</Text>
                        <View style={{...styles.input, }}>
                            <Text style={styles.input_text_25}>Mức bồn</Text>                        
                            <TextInput style={{...styles.input_text_25, backgroundColor: "#ffffff"}} placeholder="Nhập số đo" value={level2} onChangeText={e=> setLevel2(e)}/>
                        </View>
                        <View style={{...styles.input, }}>
                            <Text style={styles.input_text_25}>Nhiệt độ bồn</Text>                        
                            <TextInput style={{...styles.input_text_25, backgroundColor: "#ffffff"}} placeholder="Nhập số đo" value={temp2} onChangeText={e=> setTemp2(e)}/>
                        </View>
                        <View style={{...styles.input, }}>
                            <Text style={styles.input_text_25}>Áp suất bồn</Text>                        
                            <TextInput style={{...styles.input_text_25, backgroundColor: "#ffffff"}} placeholder="Nhập số đo" value={pre2} onChangeText={e=> setPre2(e)}/>
                        </View>
                    </View>

                    <Pressable
                        style={{...styles.btn}}
                        onPress={() => setModalVisible(false)}>
                        <Text style={styles.text_h_20}>CẬP NHẬP</Text>
                    </Pressable>
                    <Pressable
                        style={{...styles.btn, backgroundColor: "#00FFFF"}}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.text_h_20}>BỎ QUA</Text>
                    </Pressable>
                </View>
            </Modal>
        )
    }

    const ModalTank2 = () => {
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
                    <Text style={{...styles.text_h_20}}>Nhập số liệu bồn 2</Text>
                    <View style={{...styles.input, }}>
                        <Text style={styles.input_text_25}>Mức bồn</Text>                        
                        <TextInput style={{...styles.input_text_25, backgroundColor: "#ffffff"}} placeholder="Nhập số đo" value={level} onChangeText={e=> setLevel(e)}/>
                    </View>
                    <View style={{...styles.input, }}>
                        <Text style={styles.input_text_25}>Nhiệt độ bồn</Text>                        
                        <TextInput style={{...styles.input_text_25, backgroundColor: "#ffffff"}} placeholder="Nhập số đo" value={temp} onChangeText={e=> setTemp(e)}/>
                    </View>
                    <View style={{...styles.input, }}>
                        <Text style={styles.input_text_25}>Áp suất bồn</Text>                        
                        <TextInput style={{...styles.input_text_25, backgroundColor: "#ffffff"}} placeholder="Nhập số đo" value={pre} onChangeText={e=> setPre(e)}/>
                    </View>
                    <Pressable
                    style={{...styles.btn}}
                    onPress={() => setModalVisible(false)}>
                    <Text style={styles.text_h_20}>CẬP NHẬP</Text>
                    </Pressable>
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
                        <Text style={{fontSize: 20, fontWeight: "600"}}>Gas bồn</Text>
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
                    <Text style={{fontSize: 20, fontWeight: "600"}}>Tank 1</Text>
                </View>   
                <View style={{...styles.col_1,}}>
                    <Text style={{fontSize: 20, fontWeight: "600"}}>Tank 2</Text>
                </View> 
                <View style={{...styles.col_1,}}>
                    <Text style={{fontSize: 20, fontWeight: "600"}}>Tổng</Text>
                </View>               
            </View>
        )
    }
    return(
        <View >
           <Menu/>
           <ModalTank/>
           {/* <ModalTank2/> */}
            <View style={{...styles.contai, paddingLeft: 5, paddingRight: 5}}>
                <MenuList/>
                <View style={{...styles.scrollView_h570}}>
                    <FlatList
                        data={data}
                        renderItem={({item}) => <ItemTank date={item.date} tank1={item.tank1} tank2={item.tank2} MW={item.MW}/>}
                        keyExtractor={item => item.date}
                    />
                </View>
            </View>
        </View>
    )
}

export default Tank;