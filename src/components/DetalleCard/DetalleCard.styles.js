import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container:{
    marginLeft:20,
    marginRight:20,
  }, 
  itemTitulo:{
    paddingTop:'10%',
    fontSize:17,
    fontWeight:'bold',
  },
  itemTiDes:{
    fontSize:17,
    fontWeight:'bold'
  },
  itemTexto:{
    paddingTop:'15%',
  },
  itemRowContainer: {   
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Alinea los elementos con espacio entre ellos
    marginTop: 2,
  },
})