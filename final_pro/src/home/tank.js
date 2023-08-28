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

const CreateTank = () => {
    return (
        <View style={{...styles.col,}}>
            <View style={{...styles.row,}}>
                <View style={{...styles.col_1,}}>
                    <Text style={{...styles.text_p_15}}>Date</Text>
                </View>
                <View style={{...styles.input, }}>                    
                    <TextInput style={{...styles.input_text_25}} placeholder="Email@gmail.com" value={email} onChangeText={e=> setEmail(e)}/>
                </View>
            </View>

            <View style={{...styles.col,}}>
                <Text style={{...styles.text_h_20}}>Bồn số 1</Text>
                <View style={{...styles.row,}}>
                    <View style={{...styles.col_1,}}>
                        <Text style={{...styles.text_p_15}}>Mức bồn</Text>
                    </View>
                    <View style={{...styles.input, }}>                    
                        <TextInput style={{...styles.input_text_25}} value={level} onChangeText={e=> setEmail(e)}/>
                    </View>
                </View>
                <View style={{...styles.row,}}>
                    <View style={{...styles.col_1,}}>
                        <Text style={{...styles.text_p_15}}>Áp suất bồn</Text>
                    </View>
                    <View style={{...styles.input, }}>                    
                        <TextInput style={{...styles.input_text_25}} value={pre} onChangeText={e=> setEmail(e)}/>
                    </View>
                </View>
                <View style={{...styles.row,}}>
                    <View style={{...styles.col_1,}}>
                        <Text style={{...styles.text_p_15}}>Nhiệt độ bồn</Text>
                    </View>
                    <View style={{...styles.input, }}>                    
                        <TextInput style={{...styles.input_text_25}} value={temp} onChangeText={e=> setEmail(e)}/>
                    </View>
                </View>
            </View>

            <View style={styles.col_1}>
                <TouchableOpacity style={{...styles.btn,}} onPress={() => HandlerTank() }>
                    <Text style={{fontSize:20, fontWeight: "600"}}>Cập Nhật</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function Tank() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = React.useState(false);
    const [level, setLevel] = React.useState('');
    const [temp, setTemp] = React.useState('');
    const [pre, setPre] = React.useState('');

    const ModalTank1 = () => {
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
                    onPress={() => setModalVisible('tank2')}>
                    <Text style={styles.text_h_20}>CẬP NHẬP</Text>
                    </Pressable>
                </View>
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
           <ModalTank1/>
           <ModalTank2/>
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