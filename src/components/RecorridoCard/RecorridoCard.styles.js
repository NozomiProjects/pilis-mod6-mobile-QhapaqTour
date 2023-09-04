import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../utils/theme';

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    gap: 12,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 10,
    backgroundColor: COLORS.white,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    padding: 12
  },
  imageContainer: {
    position: 'relative',
    flex: 0.45,
  },
  itemImage: {
    height: 100,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  buttonHeart: {
    position: 'absolute',
    top: 5,
    right: 5,
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  itemInformationContainer: {
    flex: 0.55
  },
  itemLugar: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 1,
  },
  itemLocalidadContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 1,
  },
  itemLocalidad: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: COLORS.secondary
  },
  itemTiempo: {
    fontSize: 12,
    marginRight: 20,
    color: COLORS.secondary
  },
  itemPrecio: {   
    fontSize: 12,
    color: COLORS.secondary
  },
  itemGuia: {
    marginBottom: 1,
    marginHorizontal: 0,
    fontSize:12,
    marginRight:7
  },
  itemImgGuia: {
    width: 20,
    height: 20,
    borderRadius: 20,    
    marginRight:4,
  },
  itemCalificacionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemCalificacion: {
    color: COLORS.secondary
  } 
});