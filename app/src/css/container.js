import { StyleSheet } from 'react-native';


const container = StyleSheet.create ({
    container: { backgroundColor: '#fff', flex:1},
    row: { flexDirection: 'row', justifyContent: "space-evenly", alignItems: "center", height:50},
    areaView: {flex: 1, backgroundColor: '#2002c4'},
    menu: {flex: 1, color: 'black', alignItems: 'center', justifyContent: 'center',},
    view1: {flex: 1, justifyContent: "center", alignItems: "center", padding: 5,},
    view2: {flex: 2, justifyContent: "center", alignItems: "center", padding: 5},
    view3: {flex: 3, justifyContent: "center", alignItems: "center", padding: 5},
})

export default container;
