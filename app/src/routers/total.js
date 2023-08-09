import React from 'react';
import {View, Text, Button, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './css';
import { useNavigation } from '@react-navigation/native';

function Total() {
    const navigation = useNavigation()
    return (
    <View style={styles.areaView}>
      <View style={styles.menu}>
        <Text style={styles.textlogin}>TOTAL</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.loginInput}>
          <Text>Ngày xuất nhập tồn</Text>
        </View>
        
        <View style={styles.loginText}>
            <Button title="Go to login" onPress={() => {
                navigation.navigate('Login')
            }} />
        </View>
      </View>
    </View>
  )
}

export default Total;