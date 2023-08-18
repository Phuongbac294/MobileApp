import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    app: {flex: 1, margin: 0, backgroundColor: '#54FF9F', justifyContent: 'space-between', alignItems: 'center', padding:5},
    app_1: {flex: 1, justifyContent: 'space-evenly', flexDirection:'row', alignItems: 'center'},

    item: {width: 100, height: 100, backgroundColor: '#FFFF00', borderRadius: 50,justifyContent: 'center', alignItems: 'center', margin:30},
    
    logo: {width: 150, height: 150, borderTopStartRadius:75, borderTopEndRadius:75,  padding: 5},
    avata: {width: 100, height: 100, borderRadius:50,  padding: 5},
    img: {flex: 1, height: undefined, width: undefined, resizeMode: "cover",
    justifyContent: "center"},

    view1: {flex: 1, justifyContent: "center", alignItems: "center", padding: 5},
    view2: {flex: 2, justifyContent: "center", alignItems: "center", padding: 5},
    view3: {flex: 3, justifyContent: "center", alignItems: "center", padding: 5},
    view10: {flex: 10, backgroundColor:"#ffffff", width:420},

    viewlogo: {flex: 1, justifyContent: "center", alignItems: "center"},

    row: {height:50, flexDirection: "row", justifyContent: "space-between", alignItems:"center"},
    row1: {flex: 1, flexDirection: "row", justifyContent: "center", alignItems:"center"},
    row2: {flex: 2, flexDirection: "row", justifyContent: "center", alignItems:"center"},
    row3: {flex: 3, flexDirection: "row", justifyContent: "center", alignItems:"center"},
})

export default styles;