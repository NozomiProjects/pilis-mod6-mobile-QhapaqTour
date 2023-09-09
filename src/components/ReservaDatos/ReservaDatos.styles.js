import { StyleSheet, StatusBar } from 'react-native';
import { COLORS } from '../../utils/theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.tertiary,
  },
  itemTitulo:{
    fontSize:25,
     textAlign:'center',
    fontWeight:'bold',
  },
  itemSubTitulo:{
    fontSize:17,
    textAlign:'start',
    fontWeight:'bold',
    marginLeft:7,
  },
  /**CODIGO DE HORA Y FECHA */
  itemHFContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  timeBox: {
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderWidth:1,
    borderRadius:20,
    backgroundColor:'white',
    borderColor:COLORS.inactive,
  },
  selectedOption: {
    borderColor: 'orange',
  },
  timeText: {
    fontSize: 37,
    fontWeight:'bold',
  },
  colon: {
    fontSize: 40,
    paddingBottom:'3%',
    marginLeft:'5%',
    marginRight:'5%',

  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
  },
  controls: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  controlButton: {
    paddingHorizontal: 10,
    paddingBottom:1,
    paddingVertical: 2,
    color: COLORS.inactive,
    borderRadius: 10,
  },
  controlButtonB: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: COLORS.inactive,
    borderRadius: 10,
  },
  controlButtonText: {
    fontSize: 20,
    padding:0
  },
  controlButtonTextB: {
    fontSize: 15,
  },
  /*Codigo de contador de personas */
  itemContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor:COLORS.white,
    marginRight:'10%',
    marginLeft:'10%',
    backgroundColor:COLORS.white,
    borderRadius:10,
    marginBottom:0
  },
  label: {
    marginRight: '10%',
    marginLeft:'10%',
    fontSize: 18,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    padding: 10,
  },
  buttonText: {
    fontSize: 25,
    marginLeft:'10%',
    marginRight:'10%',
  },
  count: {
    fontSize: 25,
    marginLeft:'21',
    marginRight:'11%',
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