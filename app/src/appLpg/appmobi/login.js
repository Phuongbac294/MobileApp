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

function LoginAppMobi() {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    const LoginHandler = async () => {
        try {
            const payload = { email: email, password: password}
            navigation.navigate("HomeAppMobi")
            
        }
        catch {}
    }
    return(
        <View style={styles.app}>
            <View style={{...styles.view2, justifyContent: "flex-end"}}>
                <View style = {styles.avata}>
                    <Image style = {styles.img}
                                source={require('../img/logo-AP-removebg-preview.png')} />
                </View>
            </View>
            <View style={styles.view1}>
                <Text style={stylesText.h1}>Welcome AnPhu </Text>
                <Text style={{...stylesText.p,color: '#808080'}}>Sign to continue</Text>
            </View>
            <View style={styles.view3}>
                <View style={{...input.input, flexDirection:"row", justifyContent: "flex-start"}}>
                    <Icon name="user" color="#1E90FF" size={30} />
                    <TextInput style={{fontSize:25, marginLeft: 15}} placeholder="Email" value={email} onChangeText={e=> setEmail(e)}/>
                </View>
                <View style={{...input.input, flexDirection:"row", justifyContent: "flex-start"}}>
                    <Icon name="lock" color="#1E90FF" size={30} />
                    <TextInput style={{fontSize:25, marginLeft: 15, flex: 1}} 
                        placeholder="Password"
                        secureTextEntry={secureTextEntry}
                        value={password}
                        onChangeText={e=> setPassword(e)} />
                    <TouchableOpacity onPress = {() => setSecureTextEntry(!secureTextEntry)}>
                        {secureTextEntry ?
                            <Icon name="eye-slash" color="#1E90FF" size={30} /> :
                            <Icon name="eye" color="#1E90FF" size={30} />
                        }
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{...styles.view1, alignSelf: "flex-end"}}>
                <TouchableOpacity>
                    <Text style={{...stylesText.p, color: '#FF00FF', paddingRight:0}}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.view1}>
                <TouchableOpacity style={{...btn.btn,}} onPress={() => LoginHandler() }>
                    <Text style={{fontSize:20, fontWeight: "600"}}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <View style={{...styles.view2, justifyContent:"flex-start"}}>
                <Text style={{...stylesText.p}}>Don't have account? 
                    <TouchableOpacity onPress={() => {navigation.navigate('Register')}}>
                        <Text style={{...stylesText.p,color: "#A0522D",}}> create a new account</Text>
                    </TouchableOpacity>
                </Text>
            </View>   
        </View>
    )
}

export default LoginAppMobi;