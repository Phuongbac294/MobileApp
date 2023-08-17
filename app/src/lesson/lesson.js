import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import styles from '../css/container';
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

function Lesson() {
   const [count, setCount] = React.useState(0);
    const RenderText = ({conut}) => {
        return (
        <Text style={styles.textStyle}>State : {count+3}</Text>
        )
    }
  
  return (
    <View style={styles.container}>  
      <Text style={styles.textStyle}>Count: {count}</Text>
      {/* <RenderText/>
      <RenderTextNew number = {count}/> */}
      <RenderCount a={count}>
        <Text style={styles.textStyle}>hi am children {count}</Text>
      </RenderCount>
      <RenderCount a={count}>
        <Text style={styles.textStyle}>hi am first {count}</Text>
      </RenderCount>
      <Button
        onPress={() => setCount(count+1)}
        title ="Increase"/>      
    </View>
  );
}

const RenderCount = ({a, children}) => {
    const [count, setCount] = React.useState(a);
    React.useEffect (() => {setCount(a);}, []);// dùng Effect giúp children có thể nhận được tác động từ cha, nếu ko có thì sẽ độc lập ko nhận dc.
    return (
      <>
      <Text style={styles.textStyle}>{count}</Text>
      <Button
          onPress={() => setCount(count+1)}
          title ="Increase children"/>
      {children}
      </>
    )
  }

export default Lesson;