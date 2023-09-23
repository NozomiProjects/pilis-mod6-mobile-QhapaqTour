import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/theme';

export const styles = StyleSheet.create({
  itemContainer: {
    width: 230,
    marginHorizontal: 10,
    flexDirection: 'column',
    gap: 12,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: COLORS.white,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    padding: 12,
  },
  itemImage: {
    height: 100,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  itemInformationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
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
  itemCalificacionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2
  },
  itemCalificacion: {
    color: COLORS.secondary
  } 
});