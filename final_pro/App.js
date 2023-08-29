import {NavigationContainer,} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createContext } from 'react';
import React, {useRef, useState} from 'react';
import {DrawerLayoutAndroid, View, Text, Button, ScrollView, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import styles from './src/css/index'

import LoginIndex from './src/login/index';
import Home from './src/home/index';
import Login from './src/login/login';
import Register from './src/login/register';



// const AppComponent = createContext();
const Stack = createNativeStackNavigator();

export default function App() {
  const drawer = useRef(null);
  // const [isSignin, setIsSignin] =React.useState

  const navigationView = () => (
    <View style={{...styles.menudrawer, }}>
      <View style={{...styles.row, backgroundColor: "#FFCCFF", height: 50, padding: 5}}>
        <View>
          <Image
          style={{...styles.avata_30, }}
          source={require('./src/database/img/logo-removebg-preview.png')}
        />
        </View>
        <View style={{alignItems: "flex-start", paddingLeft:0}}><Text style={{...styles.text_h_20, alignItems: "flex-start"}}>User name</Text></View>
        <TouchableOpacity onPress={()=>{}}><Icon name="gear" color="#1E90FF" size={30} /></TouchableOpacity>
        <TouchableOpacity onPress={()=>{}}><Icon name="circle" color="#1E90FF" size={30} /></TouchableOpacity>
      </View>
      
      <View style={{...styles.col, marginLeft: 10}}>
        <View style={{backgroundColor: "#DDDDDD", width: 300, height: 35, justifyContent: "center"}}>
          <Text style={{...styles.text_h_20}}>Tổng quát</Text>
        </View>
        <View style={{ fontSize: 20, }}>
          <TouchableOpacity style={{height: 25, justifyContent: "center", width: 300}} onPress={() => {}}><Text>Thống kê</Text></TouchableOpacity>
          <TouchableOpacity style={{height: 25, justifyContent: "center", width: 300}} onPress={() => {}}><Text>Chi tiết gas bồn</Text></TouchableOpacity>
          <TouchableOpacity style={{height: 25, justifyContent: "center", width: 300}} onPress={() => {}}><Text>Chi tiết gas bình</Text></TouchableOpacity>
          <TouchableOpacity style={{height: 25, justifyContent: "center", width: 300}} onPress={() => {}}><Text>Chi tiết sản xuất</Text></TouchableOpacity>
          <TouchableOpacity style={{height: 25, justifyContent: "center", width: 300}} onPress={() => {}}><Text>xe vận tải</Text></TouchableOpacity>
        </View>

        <View style={{backgroundColor: "#DDDDDD", width: 300, height: 35, justifyContent: "center"}}>
          <Text style={{...styles.text_h_20}}>Gas bồn</Text>
        </View>
        <View style={{ fontSize: 20, }}>
          <TouchableOpacity style={{height: 25, justifyContent: "center", width: 300}} onPress={() => {}}><Text>Thống kê</Text></TouchableOpacity>
          <TouchableOpacity style={{height: 25, justifyContent: "center", width: 300}} onPress={() => {}}><Text>Bồn 1</Text></TouchableOpacity>
          <TouchableOpacity style={{height: 25, justifyContent: "center", width: 300}} onPress={() => {}}><Text>Bồn 2</Text></TouchableOpacity>
          <TouchableOpacity style={{height: 25, justifyContent: "center", width: 300}} onPress={() => {}}><Text>Nhập dữ liệu bồn</Text></TouchableOpacity>          
        </View>

        <View style={{backgroundColor: "#DDDDDD", width: 300, height: 35, justifyContent: "center"}}>
          <Text style={{...styles.text_h_20}}>Sản xuất</Text>
        </View>
        <View style={{ fontSize: 20, }}>
          <TouchableOpacity style={{height: 25, justifyContent: "center", width: 300}} onPress={() => {}}><Text>Thống kê</Text></TouchableOpacity>
          <TouchableOpacity style={{height: 25, justifyContent: "center", width: 300}} onPress={() => {}}><Text>Bình 12</Text></TouchableOpacity>
          <TouchableOpacity style={{height: 25, justifyContent: "center", width: 300}} onPress={() => {}}><Text>Bình 45</Text></TouchableOpacity>
          <TouchableOpacity style={{height: 25, justifyContent: "center", width: 300}} onPress={() => {}}><Text>Nhập dữ liệu sản xuất</Text></TouchableOpacity>          
        </View>

        <View style={{backgroundColor: "#DDDDDD", width: 300, height: 35, justifyContent: "center"}}>
          <Text style={{...styles.text_h_20}}>Vận tải</Text>
        </View>
        <View style={{ fontSize: 20, }}>
          <TouchableOpacity style={{height: 25, justifyContent: "center", width: 300}} onPress={() => {}}><Text>Thống kê</Text></TouchableOpacity>
          <TouchableOpacity style={{height: 25, justifyContent: "center", width: 300}} onPress={() => {}}><Text>Lịch bảo dưỡng</Text></TouchableOpacity>
          <TouchableOpacity style={{height: 25, justifyContent: "center", width: 300}} onPress={() => {}}><Text>Sửa chữa</Text></TouchableOpacity>
          <TouchableOpacity style={{height: 25, justifyContent: "center", width: 300}} onPress={() => {}}><Text>Đăng kiểm</Text></TouchableOpacity>          
        </View>
      </View>
      
    </View>)
 
   

  return (
    // <AppComponent.Provider >
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition='left'
      renderNavigationView={navigationView}>
        <NavigationContainer>          
          <Stack.Navigator initialRouteName="Login" screenOptions={{...styles.screenOptions,          
                              headerLeft: () => (
                                  <TouchableOpacity                                    
                                    onPress={() => drawer.current.openDrawer()}
                                  >
                                      <Icon name="bars" color="#000000" size={30} />
                                  </TouchableOpacity>),}}>                       
              <Stack.Screen name="Home" component={Home} options={{ title: 'Anphu Engery' }}/> 
              <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/> 
              <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
          </Stack.Navigator>        
        </NavigationContainer>
      </DrawerLayoutAndroid>
    // </AppComponent.Provider>
  );
}

