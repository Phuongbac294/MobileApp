import React from 'react';
import { useNavigation,} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';





import Login from '../login/login';
import Register from '../login/register';
import Total from './total';

const Tab = createBottomTabNavigator();

export default function Home() {
    const navigation = useNavigation()
    return (                    
        <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                
                if (route.name === 'Total') {
                    iconName = 'hotel'
                } else if (route.name === 'Login') {
                    iconName = 'user'
                } else if (route.name === 'Register') {
                    iconName = 'registered'
                }
            
                // You can return any component that you like here!
                return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#00FFFF',
                tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name="Total" component={Total} />
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Register" component={Register} />
        </Tab.Navigator>
    )

}