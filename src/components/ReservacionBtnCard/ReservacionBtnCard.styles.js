import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/theme';
export const styles = StyleSheet.create({
  container: {
    marginTop:1,
    marginBottom:0,
  },
 /*Codigo del boton de reserva y de los precios */
 itemColumn: {
    marginTop:'0%',
    flexDirection: 'column',
    alignItems: 'center',   
  },
  itemRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    alignItems: 'center',
    marginRight:'7%',

  },    
  itemRowContainerBtn:{
    flexDirection: 'row',
    borderWidth:1,
    borderColor:COLORS.inactive,
    justifyContent: 'space-between',
    marginTop: '2%',
    verticalAlign: 'bottom',
    alignItems: 'center',
    paddingBottom:7,
    paddingTop:7,
    backgroundColor:COLORS.white,   
  },  
  itemBoton: {
    backgroundColor: COLORS.primary, // Cambia el color de fondo según tus preferencias
    borderRadius: 50, // Establece el radio de borde para hacerlo muy redondeado
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight:20,
  },
  itemTextoBoton: {
    color: 'white', // Cambia el color del texto según tus preferencias
    textAlign: 'center',
    fontSize: 13,
  },
  itemPrecio:{
      fontSize:23,          
      fontWeight:'bold',
      marginLeft:'30%',

     },
  itemPrecioPalabra:{
    alignItems:'center',
    marginLeft:'35%',
    fontSize:12,
    color:COLORS.inactive,
   },
});