import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Image, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation, } from '@react-navigation/native';

import styles from '../css/index';
  
  function Login() {
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
        <SafeAreaView style={{...styles.container}}>
            <View style={{...styles.col_2, justifyContent: "flex-end"}}>
                <View style = {styles.avata}>
                    <Image style = {styles.img}
                                source={require('../database/img/logo-AP-removebg-preview.png')} />
                </View>
            </View>
            <View style={styles.col_1}>
                <Text style={{...styles.text_h_30}}>Welcome AnPhu </Text>
                <Text style={{...styles.text_p_15,color: '#808080'}}>Sign to continue</Text>
            </View>
            <View style={{...styles.col,}}>
                <View style={{...styles.input, }}>
                    <Icon name="user" color="#1E90FF" size={30} />
                    <TextInput style={{...styles.input_text_25}} placeholder="Email@gmail.com" value={email} onChangeText={e=> setEmail(e)}/>
                </View>
                <View style={{...styles.input, }}>
                    <Icon name="lock" color="#1E90FF" size={30} />
                    <TextInput style={{...styles.input_text_25,}} 
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
            <View style={{...styles.col_1, alignSelf: "flex-end"}}>
                <TouchableOpacity>
                    <Text style={{...styles.text_p_15, color: '#FF00FF', paddingRight:0}}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.col_1}>
                <TouchableOpacity style={{...styles.btn,}} onPress={() => LoginHandler() }>
                    <Text style={{fontSize:20, fontWeight: "600"}}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <View style={{...styles.col_2, justifyContent:"flex-start"}}>
                <Text style={{...styles.text_p_15}}>Don't have account? 
                    <TouchableOpacity onPress={() => {navigation.navigate('Register')}}>
                        <Text style={{...styles.text_p_15,color: "#A0522D",}}> create a new account</Text>
                    </TouchableOpacity>
                </Text>
            </View>   
        </SafeAreaView>
    )
}

export default Login;