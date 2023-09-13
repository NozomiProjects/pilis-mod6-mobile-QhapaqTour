import { StyleSheet, StatusBar } from 'react-native';
import { COLORS } from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.tertiary,
  },
  mainContent: {
    padding: 20,
    gap: 25
  },
  row: {
    flexDirection: 'column',
    gap: 10
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Manjari_700Bold',
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Poppins_600SemiBold',
    color: COLORS.secondary
  },
  calendar: {
    borderRadius: 20,
    height: 340
  },

  
 /*Codigo del boton de reserva y de los precios */
//  itemColumn: {
//     marginTop:'0%',
//     flexDirection: 'column',
//     alignItems: 'center',   
//   },
//   itemRowContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 4,
//     alignItems: 'center',
//     marginRight:'7%',
//   },    
//   itemRowContainerBtn:{
//     flexDirection: 'row',
//     borderWidth:1,
//     borderColor:COLORS.grey,
//     justifyContent: 'space-between',
//     marginTop: '2%',
//     verticalAlign: 'bottom',
//     alignItems: 'center',
//     paddingBottom:7,
//     paddingTop:7,
//     backgroundColor:COLORS.white,   
//   },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: COLORS.grey,
    backgroundColor:COLORS.white, 
  },
  priceContainer: {
    alignItems: 'center'
  },
  priceValue: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold'
  },
  priceTag: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
  },
})