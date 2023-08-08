import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, TextInput, FlatList, Item, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './css';





const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={Detail} />
    </HomeStack.Navigator>
  );
}

function Home() {
    const navigation = useNavigation();
    return (
      <View style={styles.textStyle}>
        <Text>Home</Text>
        <Button title="Go to detail" onPress={() => {
                  navigation.navigate('Detail', {user: 'Alice'});
              }} />
      </View>
    );
}

export default HomeStackScreen;