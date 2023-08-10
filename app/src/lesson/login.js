import React from 'react';
import {View, Text, Button, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../routers/css';
import { useNavigation } from '@react-navigation/native';
import container from '../css/container';
import btn from '../css/btn';
import text from '../css/text';

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
  const navigation = useNavigation()
    return (
    <View style={container.areaView}>
      <View style={container.menu}>
        <Text style={text.textlogin}>LOGIN</Text>
      </View>
      <View style={container.container}>
        <View style={styles.loginIcon}>
          <TouchableOpacity style={styles.icon} onPress={() => {}}>
            <Text style={text.textlogin}>G</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => {}}>
            <Text style={text.textlogin}>F</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginInput}>
          
          <Input/>
          <Input label='password'/>
        </View>
        <View style={styles.loginButon}>
          <Button style = {styles.styleButton} title='LOGIN' onClick={()=>{}}/>
        </View>
        <View style={text.loginText}>        
          <Button title="Go to total" onPress={() => {
            navigation.navigate('Total')
          }} />
        </View>
      </View>
    </View>
  )
}

export default Login;



