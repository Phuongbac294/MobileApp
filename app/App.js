import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, TextInput, FlatList, Item, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import SafeAreaView from 'react-native-safe-area-view';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Input = ({label = "Username"}) => {
  return (
    <View style={{paddingHorizontal: 10, marginTop: 20}}>
      <Text style = {{marginRight:20}}>{label}</Text>
      <View style = {{borderBottomColor: '#555', borderBottomWidth: 1, flexDirection: 'row'}}>
        <Icon name="user" color="#eee" size={30} />
        <TextInput style = {{paddingHorizontal: 100, paddingVertical: 5, }} placeholder='Enter User Name'/>
      </View>
    </View>
  )
}

function Login() {
  return (
    <View style={styles.areaView}>
      <View style={styles.menu}>
        <Text style={styles.textlogin}>LOGIN</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.loginIcon}>
          <TouchableOpacity style={styles.icon} onPress={() => {}}>
            <Text style={styles.textlogin}>G</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => {}}>
            <Text style={styles.textlogin}>F</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginInput}>
          <Input/>
          <Input label='password'/>
        </View>
        <View style={styles.loginButon}>
          <Button style = {styles.styleButton} title='LOGIN' onClick={()=>{}}/>
        </View>
        <View style={styles.loginText}>
          <Text>Anphu Engenery</Text>
        </View>
      </View>
    </View>
  )
}
const DATA = [
  {id: '123456', title: 'first item',},
  {id: '678910', title: 'two item',},
  {id: '234567', title: 'three item',}
]


const ListView = () => {
  return (
    // <SafeAreaProvider>
      {/* <SafeAreaView style = {{flex:1,}}> */}
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
      {/* </SafeAreaView> */}
    // </SafeAreaProvider>
  )
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
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="Data" component={ListView} />
        {/* <Stack.Screen name="Home" component={Home} options={{ title: 'My home', headerStyle: {backgroundColor: '#f4511e', headerTitleStyle: {fontWeight: 'bold',}}, }}/>
        <Stack.Screen name="Detail" component={Detail} /> */}
      </Stack.Navigator>
      {/* <Tab.Navigator >
        <Tab.Screen name="Home" component={HomeStackScreen} options={{ tabBarBadge: 3 }}/>
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}


// Style CSS
const styles = StyleSheet.create({
  areaView: {flex: 1, backgroundColor: '#2002c4'},
  menu: {flex: 1, color: 'black', alignItems: 'center',    justifyContent: 'center',
},
  container: {flex: 6, backgroundColor: '#fff', alignItems: 'center',    justifyContent: 'center', borderTopRightRadius: 30, borderTopLeftRadius: 30,
  },
  loginIcon: {flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' },
  loginButon: {flex: 1, alignItems: 'center', justifyContent: 'center',},
  loginInput: {flex: 3, alignItems: 'center', justifyContent: 'center'},
  loginText: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  textlogin: {fontSize: 20,fontWeight: 'bold', textAlign: 'center', color: 'red'},
  textStyle: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  icon: {width: 100, height: 50, backgroundColor: '#ddd', justifyContent: 'center', alignContent: 'center', borderRadius: 25, marginLeft:20, marginRight:20},
  styleButton: {width: 100, height: 50, borderRadius: 25, marginLeft:20, marginRight:20},
});

