import React from 'react';
import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import { useNavigation,} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../css/index';
import dataTotal from '../database/data/total.json';
const newdata = dataTotal;
const data = newdata.reverse();
// const data = []

const ItemChai = ({date, tanks, LPG12, LPG45}) => (
    <View style={{...styles.row, }}>
        <View style={{...styles.itemList}}>
            <Text style={{fontSize:15}}>{date}</Text>
        </View>
        <View style={{...styles.itemList}}>
            <Text style={{fontSize:20}}>{tanks}</Text>
        </View>
        <View style={{...styles.itemList}}>
            <Text style={{fontSize:20}}>{LPG12.weight}</Text>
        </View>
        <View style={{...styles.itemList}}>
            <Text style={{fontSize:20, color: "red"}}>{LPG45.weight}</Text>
        </View>
    </View>
  );


function Total() {
    const navigation = useNavigation();
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false),1000)
    }
    return(
        <View >
            <View >
                <View style={{...styles.row, height: 50, backgroundColor: "#FFFFCC"}}>
                    <View style={{...styles.col_1, alignItems: "flex-start", paddingLeft: 10}}>
                        <Text style={{fontSize: 20, fontWeight: "600"}}>Tổng hợp</Text>
                    </View>
                    <TouchableOpacity style={{...styles.col_1, alignItems: "flex-end", paddingRight: 10}}>
                        <Icon name="plus" color="#1E90FF" size={20} />
                    </TouchableOpacity>
                </View> 
            </View>
            <View style={{...styles.contai, paddingLeft: 5, paddingRight: 5}}>
                <View style={styles.row}>
                    <View style={{...styles.col_1,}}>
                        <Text style={{fontSize: 20, fontWeight: "600"}}>Ngày</Text>
                    </View>
                    <View style={{...styles.col_1,}}>
                        <Text style={{fontSize: 20, fontWeight: "600"}}>Bồn</Text>
                    </View>   
                    <View style={{...styles.col_1,}}>
                        <Text style={{fontSize: 20, fontWeight: "600"}}>Bình 12</Text>
                    </View> 
                    <View style={{...styles.col_1,}}>
                        <Text style={{fontSize: 20, fontWeight: "600"}}>Bình 45</Text>
                    </View>               
                </View>
                <View style={{...styles.scrollView_h570}}>
                    
                        <FlatList
                            data={data}
                            renderItem={({item}) => <ItemChai date={item.date} tanks={item.tanks} LPG12={item.LPG12} LPG45={item.LPG45}/>}
                            keyExtractor={item => item.date}
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    
                </View>
            </View>
        </View>
    )
}

export default Total;