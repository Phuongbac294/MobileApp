import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


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


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={Detail} />
    </HomeStack.Navigator>
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



export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'My home', headerStyle: {backgroundColor: '#f4511e', headerTitleStyle: {fontWeight: 'bold',}}, }}/>
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator> */}
      <Tab.Navigator >
        <Tab.Screen name="Home" component={HomeStackScreen} options={{ tabBarBadge: 3 }}/>
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


// Style CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // textStyle: {fontSize: 19,fontWeight: 'bold', textAlign: 'center', color: 'red'},
  textStyle: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});

