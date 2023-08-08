import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, TextInput, FlatList, Item, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import SafeAreaView from 'react-native-safe-area-view';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './src/routers/login';
import HomeStackScreen from './src/routers/home';
import SettingsStackScreen from './src/routers/SettingsStackScreen';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


// const DATA = [
//   {id: '123456', title: 'first item',},
//   {id: '678910', title: 'two item',},
//   {id: '234567', title: 'three item',}
// ]





export default function App() {
  return (    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />        
        {/* <Stack.Screen name="Home" component={Home} options={{ title: 'My home', headerStyle: {backgroundColor: '#f4511e', headerTitleStyle: {fontWeight: 'bold',}}, }}/>
        <Stack.Screen name="Detail" component={Detail} /> */}
        {/* <Tab.Navigator >
          <Tab.Screen name="Home" component={HomeStackScreen} options={{ tabBarBadge: 3 }}/>
          <Tab.Screen name="Settings" component={SettingsStackScreen} />
        </Tab.Navigator> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


