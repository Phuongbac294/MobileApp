// import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
// import { 
//   Text, // span
//   View, // div
//   StyleSheet, // css
//   TextInput, // input
//   // click event 
//   Touchable,  //
//   TouchableOpacity,
//   Button,
//   Pressable,
//   //Scroll or render list
//   ScrollView,
//   FlatList,
//   //
//   SafeAreaView,
//   StatusBar,
//   //
//   Platform,
//   // kích thước máy
//   Dimensions,
//   Alert,
//   Image,
//   //
//   Animated,
// } from 'react-native';
// import Lesson from './src/lesson/lesson';
// import { InputAccessoryView } from 'react-native-input-scrollable';

// import axios from 'axios';

// const {height, width} = Dimensions.get('window');
import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

export default function App() {
  const [count, setCount] = React.useState(0);
  const RenderText = ({conut}) => {
    return (
      <Text style={styles.textStyle}>State : {count+3}</Text>
    )
  }
  
  return (
    <View style={styles.container}>  
      <Text style={styles.textStyle}>Count: {count}</Text>
      <RenderText/>
      <RenderTextNew number = {count}/>
      <Button
        onPress={() => setCount(count+1)}
        title ="Increase"/>      
    </View>
  );
}

const RenderTextNew = ({number}) => {
  return (
    <Text style={styles.textStyle}>Number : {number+5}</Text>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {fontSize: 19,fontWeight: 'bold', textAlign: 'center', color: 'red'},
});
