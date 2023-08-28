import React from 'react';
import {View, Text} from 'react-native';
import Login from './login';
import Register from './register';

import styles from '../css/index';



export default function LoginIndex () {

    const [isSingin, setInSingin] = React.useState(false)
    return (
        <View style={{...styles.container}}>
            {/* <Register/> */}
            <Login/>
        </View>
    )
}