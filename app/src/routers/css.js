import { StyleSheet } from 'react-native';

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

  export default styles;