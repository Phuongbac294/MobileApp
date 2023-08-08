import React from 'react';
import {View, Text, Button, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './css';

const Input = ({label = "Username"}) => {
  return (
    <View style={{paddingHorizontal: 10, marginTop: 20}}>
      <Text style = {{marginRight:20}}>{label}</Text>
      <View style = {{borderBottomColor: '#555', borderBottomWidth: 1, flexDirection: 'row'}}>
        <Icon name="user" color="#eee" size={30} />
        <TextInput style = {{paddingHorizontal: 100, paddingVertical: 5, }} placeholder='Enter User Name'/>
      </View>
    </View>
  )
}

function Login() {
  

  return (
    <View style={styles.areaView}>
      <View style={styles.menu}>
        <Text style={styles.textlogin}>LOGIN</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.loginIcon}>
          <TouchableOpacity style={styles.icon} onPress={() => {}}>
            <Text style={styles.textlogin}>G</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => {}}>
            <Text style={styles.textlogin}>F</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginInput}>
          <Input/>
          <Input label='password'/>
        </View>
        <View style={styles.loginButon}>
          <Button style = {styles.styleButton} title='LOGIN' onClick={()=>{}}/>
        </View>
        <View style={styles.loginText}>
          <Text>Anphu Engenery</Text>
        </View>
      </View>
    </View>
  )
}

export default Login;



