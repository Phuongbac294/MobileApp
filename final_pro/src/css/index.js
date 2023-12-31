import { StyleSheet, Dimensions,  Button, TouchableOpacity  } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation,} from '@react-navigation/native';
import React from "react";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


// const menu = () => {
//     const navigation = useNavigation();
//     return navigation.navigate('Demo')

// }

const styles = StyleSheet.create({
    screenOptions:  {
                        headerStyle: {backgroundColor: '#EE82EE',}, 
                        headerTintColor: '#fff', 
                        headerTitleStyle: {fontWeight: 'bold', justifyContent: 'center'},
                        headerLeft: () => (
                                        <TouchableOpacity
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
                    

    container: {flex: 1, backgroundColor: '#fff', alignItems: 'center'},
    contai: {alignItems: 'center', justifyContent: 'center'},

    itemList: {height: 45, width: 100, alignItems: "center", justifyContent: 'center'},

    
    col: {alignItems: "flex-start",justifyContent: 'center', height: 'auto'},
    col_1: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    col_2: {flex: 2, alignItems: 'center',justifyContent: 'center'},

    row: {flexDirection: "row",justifyContent: "space-between", alignItems: "center" },
    row_1: {flex:1, flexDirection: "row", justifyContent: "center", alignItems: "space-between",},
    row_2: {flex:2, flexDirection: "row", justifyContent: "space-between", alignItems: "center"},


    text_h_30: {fontSize:30, fontWeight: 'bold'},
    text_h_20: {fontSize:20, fontWeight: 'bold'},
    text_p_15: {fontSize:15,},

    logo: {width: 150, height: 150, borderTopStartRadius:75, borderTopEndRadius:75,  padding: 5, justifyContent: "center", alignItems: "center"},
    avata: {width: 100, height: 100, borderRadius:50,  padding: 5},
    avata_30: {width: 30, height: 30, borderRadius:15,  padding: 5},
    img: {flex: 1, height: undefined, width: undefined, resizeMode: "cover",
    justifyContent: "center"},

    input: {width: 350, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: "#DCDCDC", marginBottom: 5, marginTop: 5, fontSize: 25, borderRadius: 5, padding: 7, flexDirection:"row", justifyContent:"flex-start"},
    input_text_25: { fontSize: 25, marginLeft: 15, flex: 1},

    btn: {width:350, height:50, backgroundColor:'#FFFF00', alignItems: "center", justifyContent: "center", borderRadius:10, marginLeft:0, marginRight:0},

    scrollView_h570: { height: height - 270},

    centeredView: {flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 22, height: height - 300, backgroundColor: '#CCFFFF',},
    modalView: {margin: 20, backgroundColor: '#EE82EE', borderRadius: 20, padding: 35, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2,},},

    menudrawer: {
        flex: 1,  padding: 0, paddingTop: 65, },
    
});

export default styles;