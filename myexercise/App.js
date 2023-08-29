import React, {useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
} from 'react-native';

const App = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');
  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition='left'
      renderNavigationView={navigationView}>
      <View style={styles.container}>
        <Text style={styles.paragraph}>Drawer on the {drawerPosition}!</Text>
        <Button
          title="Change Drawer Position"
          onPress={() => changeDrawerPosition()}
        />
        <Text style={styles.paragraph}>
          Swipe from the side or press button below to see it!
        </Text>
        <Button
          title="Open drawer my exercise"
          onPress={() => drawer.current.openDrawer()}
        />
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
  screenOptions:  {
    headerStyle: {backgroundColor: '#EE82EE',}, 
    headerTintColor: '#fff', 
    headerTitleStyle: {fontWeight: 'bold', justifyContent: 'center'},
    headerLeft: () => (
                    <TouchableOpacity
                    onPress={() => drawer.current.openDrawer()}
                    title="Info"
                    color="#fff"
                    >
                        <Icon name="bars" color="#000000" size={30} />
                    </TouchableOpacity>),
    headerRight: () => (
                    <TouchableOpacity
                    onPress={() => alert('Cập nhật dữ liệu mới')}
                    title="Info"
                    color="#fff"
                    screenOptions ={{BarBadge: 3}}
                    >
                        <Icon name="bell" color="#000000" size={30} />
                    </TouchableOpacity>),
    headerTitleAlign: 'center',
    headerShown:'false',
    
},
});

export default App;