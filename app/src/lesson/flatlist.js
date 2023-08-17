import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import styles from '../css/container';
import tankdata from './tanklesson.json';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  
const dataTank = tankdata.reverse();
  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  
  const Tank = ({date, tank1, tank2, MW}) => (
    <View style={styles.row}>
        <View style={styles.view1}>
            <Text style={{fontSize:15}}>{date}</Text>
        </View>
        <View style={styles.view1}>
            <Text style={{fontSize:20}}>{tank1.Mw}</Text>
        </View>
        <View style={styles.view1}>
            <Text style={{fontSize:20}}>{tank2.Mw}</Text>
        </View>
        <View style={styles.view1}>
            <Text style={{fontSize:20, color: "red"}}>{MW}</Text>
        </View>
    </View>
  );



  function FlatListLesson () {
    const [refreshing, setRefreshing] = React.useState(false)
    const [data,setData] = React.useState(dataTank)
    const onRefresh = () => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
        setData(dataTank);
      }, 3 * 1000);
    }
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
        <View style={styles.row}>
            <View style={styles.view1}>
            <Text style={{fontSize:20, fontWeight: "600"}}>Ngày</Text>
            </View>
            <View style={styles.view1}>
                <Text style={{fontSize:20, fontWeight: "600"}}>Tank 1</Text>
            </View>
            <View style={styles.view1}>
                <Text style={{fontSize:20, fontWeight: "600"}}>Tank 2</Text>
            </View>
            <View style={styles.view1}>
                <Text style={{fontSize:20, fontWeight: "600"}}>Tổng</Text>
            </View>
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => <Tank date={item.date} MW={item.MW} tank1={item.tank1} tank2={item.tank2}/>}
          keyExtractor={item => item.date}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      </SafeAreaView>
    );
  };

  export default FlatListLesson;