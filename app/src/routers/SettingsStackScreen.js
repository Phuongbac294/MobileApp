import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, TextInput, FlatList, Item, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './css';


const Detail = () => {
    const navigation = useNavigation();
    const route = useRoute();
      return (
          <View style={styles.textStyle}>
        <Text>Details Screen</Text>
        <Text> User: {route.params.user}</Text>
        <Button title="Go back" onPress={() => {
                  navigation.goBack()}} />
        <Button title="Change Header" onPress={() => {
                  navigation.setOptions({title: 'Updated'})
              }} />
      </View>
      )
  }

function Settings() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Settings" component={Settings} />
            <SettingsStack.Screen name="Details" component={Detail} />
        </SettingsStack.Navigator>
    );
}

export default SettingsStackScreen;