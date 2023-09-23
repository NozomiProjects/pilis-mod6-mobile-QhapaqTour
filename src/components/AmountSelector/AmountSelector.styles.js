import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/theme';
export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: COLORS.white,
    width: 350,
    borderRadius: 10,
    padding: 8
  },
  label: {
    fontSize: 18,
    fontFamily: 'Poppins_400Regular'
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16
  },
  button: {
    padding: 10,
  },
  buttonText: {
    fontSize: 25,
  },
  count: {
    fontSize: 25,
    fontFamily: 'Poppins_400Regular'
  },
});