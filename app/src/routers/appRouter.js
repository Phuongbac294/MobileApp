import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, TextInput, FlatList, Item, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './css';
import Login from './login';
import Total from './total';

const StackApp = createNativeStackNavigator();

function Home_app() {
    const navigation = useNavigation();
    return (
      <View style={styles.textStyle}>        
        <Button title="Go to login" onPress={() => {
                  navigation.navigate('Login');
              }} />
        <Button title="Go to sigup" onPress={() => {
                  navigation.navigate('Sigup');
              }} />
      </View>
    );
  }

  export default function AppRouter() {
    const navigation = useNavigation()
    return (    
        <StackApp.Navigator>
            <StackApp.Screen name="Home_app" component={Home_app} />
            <StackApp.Screen name="Login" component={Login} />
            <StackApp.Screen name="Total" component={Total} />         
        </StackApp.Navigator>
    );
}


