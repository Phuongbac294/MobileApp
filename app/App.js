import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, TextInput, FlatList, Item, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import SafeAreaView from 'react-native-safe-area-view';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppRouter from './src/routers/appRouter';
// import Total from './src/routers/total';
import styles from './src/routers/css';
import HomeStackScreen from './src/lesson/home';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeApp() {
  const navigation = useNavigation();
  return (
    <View style={styles.textStyle}>
      <Button title="Go to lesson" onPress={() => {
                navigation.navigate('Lesson');
            }} />
      <Button title="Go to App" onPress={() => {
                navigation.navigate('App');
            }} />
    </View>
  );
}

export default function App() {
  return (    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeApp" component={HomeApp} />
        <Stack.Screen name="App" component={AppRouter} />          
        <Stack.Screen name="Lesson" component={HomeStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


