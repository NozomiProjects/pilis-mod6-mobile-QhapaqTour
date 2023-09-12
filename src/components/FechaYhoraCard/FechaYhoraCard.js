import { StyleSheet, } from 'react-native';
import { COLORS } from '../../utils/theme';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center',
    },
    conteredView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:22,
    },
    modalView:{
        margin:20,
        backgroundColor:'white',
        borderRadius:20,
        width:20,
        wodh:'90%',
        padding:35,
        alignItems:'center',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius:4,
        elevation:5,
    },

  });