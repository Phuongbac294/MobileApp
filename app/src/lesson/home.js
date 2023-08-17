import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, TextInput, FlatList, Item, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import btn from '../css/btn';
import container from '../css/container';
import LoginLesson from './login';
import Lesson_Lesson from './lesson';
import FlatListLesson from './flatlist';





const HomeStack = createNativeStackNavigator();

const Detail = () => {
  const navigation = useNavigation();
  const route = useRoute();
    return (
      <SafeAreaView style={container.container}>
        <Text>Details Screen</Text>
        <Text> User: {route.params.user}</Text>
        <View style={container.row}>
          <Button style={btn.Button} title="Go back" onPress={() => {
                    navigation.goBack()}} />
          <Button style={btn.Button} title="Change Header" onPress={() => {
                    navigation.setOptions({title: 'Updated'})
                }} />
          
        </View>
    </SafeAreaView>
    )
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={Detail} />
      <HomeStack.Screen name="lesson_login" component={LoginLesson} />
      <HomeStack.Screen name="lesson_lesson" component={Lesson_Lesson} />
      <HomeStack.Screen name="lesson_flatlist" component={FlatListLesson} />
    </HomeStack.Navigator>
  );
}

function Home() {
    const navigation = useNavigation();
    return (
      <View style = {container.container} >
        <Text>Home</Text>
        <Button style={btn.Button} title="Go to detail" onPress={() => {
                  navigation.navigate('Details', {user: 'Alice'});
              }} />
        <Button style={btn.Button} title="Go to Login lesson" onPress={() => {
                    navigation.navigate('lesson_login')
                }} />
        <Button style={btn.Button} title="Go to lesson" onPress={() => {
            navigation.navigate('lesson_lesson')
        }} />
        <Button style={btn.Button} title="Go to Flatlist" onPress={() => {
            navigation.navigate('lesson_flatlist')
        }} />
      </View>
    );
}

export default HomeStackScreen;