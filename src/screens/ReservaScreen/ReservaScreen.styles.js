import { StyleSheet, StatusBar } from 'react-native';
import { COLORS } from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    width:'100%',
    padding: 10,
    verticalAlign: 'bottom',
    flex: 1 ,
    marginTop:20,
    backgroundColor: COLORS.tertiary,
    alignItems: 'center',
    justifyContent: 'center',

  },
  itemCalendario:{
marginTop:'2%',
marginBottom:'1%',
marginTop:1,
justifyContent: 'space-between',
},
  itemTitulo:{
    marginTop: StatusBar.currentHeight,

    fontSize:33,
     textAlign:'center',
    fontWeight:'bold',
  },
  itemSubTitulo:{
    fontSize:17,
    textAlign:'start',
    fontWeight:'bold',
    marginLeft:7,
    marginBottom:1,
    marginTop:5,
  },
  itemSubTitulo1:{
    fontSize:17,
    textAlign:'start',
    fontWeight:'bold',
    marginLeft:7,
    marginBottom:1,
    marginTop:0,
  },/*
  marginTop: '30%',
verticalAlign: 'bottom',
paddingTop:19, 
  flex: 1 ,
  marginTop: '30%',
verticalAlign: 'bottom',
paddingTop:19, 
  flex: 1 ,
*/
})