import React from 'react';
import { useNavigation,} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';




import Total from './total';
import Tank from './tank';
import Chai from './chai';

const Tab = createBottomTabNavigator();

export default function Home() {
    const navigation = useNavigation()
    
    return (                    
        <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                let iconName;
                
                if (route.name === 'Total') {
                    iconName = 'filter'
                } else if (route.name === 'Login') {
                    iconName = 'user'
                } else if (route.name === 'Chai') {
                    iconName = 'truck'
                } else if (route.name === 'Tank') {
                    iconName = 'cloud'
                }
                else if (route.name === 'Setting') {
                    iconName = 'gear'
                }
                // You can return any component that you like here!
                return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#00FFFF',
                tabBarInactiveTintColor: 'gray',
                headerShown:'false',
                
            })}
          >
            <Tab.Screen name="Total" component={Total} options={{ tabBarBadge: 3, headerShown: false }} />
            <Tab.Screen name="Tank" component={Tank}  options={{headerShown: false}}/>
            <Tab.Screen name="Chai" component={Chai} options={{headerShown: false}}/>
        </Tab.Navigator>
    )

}