import React from 'react';
import {View, Text, Button, TouchableOpacity, TextInput, Image, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer, useNavigation, useRoute} from '@react-navigation/native';

import styles from '../css/index';

function Register() {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={{...styles.col_2, justifyContent: "flex-end"}}>
                <View style = {styles.avata}>
                    <Image style = {styles.img}
                        source={require('../database/img/logo-AP-removebg-preview.png')} />
                </View>
            </View>
            <View style={styles.col_1}>
                <Text style={{...styles.text_h_30}}>Create Account </Text>
                <Text style={{...styles.text_p_15,color: '#808080'}}>Create a new account</Text>
            </View>
            <View style={styles.col}>
                <View style={{...styles.input,}}>
                    <Icon name="user" color="#1E90FF" size={30} />
                    <TextInput style={{...styles.input_text_25}} placeholder="Username" />
                    
                </View>
                <View style={{...styles.input,}}>
                    <Icon name="lock" color="#1E90FF" size={30} />
                    <TextInput style={{...styles.input_text_25}} placeholder="Password" />
                    <Icon name="eye-slash" color="#1E90FF" size={30} />
                </View>
                <View style={{...styles.input, }}>
                    <Icon name="lock" color="#1E90FF" size={30} />
                    <TextInput style={{...styles.input_text_25}} placeholder="ConfirmPassword" />
                    <Icon name="eye-slash" color="#1E90FF" size={30} />
                </View>
            </View>            
            <View style={styles.col_2}>
                <TouchableOpacity style={{...styles.btn,}}>
                    <Text style={{fontSize:20, fontWeight: "600"}}>REGISTER</Text>
                </TouchableOpacity>
            </View>
            <View style={{...styles.row_1, alignItems:"flex-end"}}>
                <TouchableOpacity style={{...styles.logo,}}>
                    <Icon name="google" color="#1E90FF" size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.logo,}}>
                    <Icon name="facebook" color="#FF00FF" size={30} />
                </TouchableOpacity>
            </View>             
        </View>
    )
}

export default Register;