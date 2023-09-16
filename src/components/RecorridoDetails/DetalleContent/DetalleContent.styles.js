import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/theme';

export const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    gap: 20
  }, 
  padding: {
    padding: 20,
    gap: 20,
  },
  itemTitle: {
    fontSize: 18,
    fontFamily:'Poppins_600SemiBold',
  },
  itemText: {
    fontFamily:'Poppins_400Regular',
    color: COLORS.secondary
  },
  itemRowContainer: {   
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})