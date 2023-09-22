import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { COLORS } from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    width: Dimensions.get('screen').width - 20,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 10,
    backgroundColor: COLORS.white,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },  
  itemRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  itemRowContain: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 2,
  },
  itemRowRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTitulo:{
    fontSize:24,
    fontFamily: 'Poppins_600SemiBold'
  },
  itemImgTitulo:{    
    width: 73,
    height: 55,
    borderRadius: 20,
    marginRight:4,
  },
  itemList: {
    padding: 10,
  },
  itemImage: {
    marginTop: '4%',
    marginLeft: '4%',
    height: 80,
    width: '40%',
    resizeMode: 'cover',
    borderRadius: 5,
  },
  itemTextContainer: {
    marginLeft: '4%',
    width: '46%',
  },
  itemLugar: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 1,
    marginHorizontal: 0,
    fontSize:13,
  },
  itemLocalidad: {
    marginBottom: 1,
    marginHorizontal: 0,
    fontSize:11,
  },
  itemTiempo: {
    marginBottom: 1,
    marginHorizontal: 0,
    fontSize: 10,
    marginRight: 20
  },
  itemPrecio: {
    marginBottom: 1,
    marginHorizontal: 0,    
    fontSize: 12,
    textAlign: 'right',
  },
  itemGuia: {
    marginBottom: 1,
    marginHorizontal: 0,
    fontSize:12,
    marginRight:7
  },
  
  itemCalificacion: {
    marginBottom: 1,
    marginHorizontal: 0,
    marginRight:0,
    fontSize:10,
    textAlign: 'right',
  },  
  
  itemGuia: {
    marginBottom: 1,
    marginHorizontal: 0,
    fontSize:12,    
  },
  itemImgGuia: {
    width: 19,
    height: 17,
    borderRadius: 20,    
    marginRight:4,
  },
  
  heartIcon: {
    position: 'absolute',
    backgroundColor: COLORS.white,
    top: 5,
    right: 5,
  },
});