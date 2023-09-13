import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/theme';
export const styles = StyleSheet.create({
  container: {
    marginBottom:10,
    marginTop:5,
    backgroundColor: COLORS.tertiary,
  },

  /**CODIGO DE HORA Y FECHA */
  innerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  timeBox: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 7,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor:'white',
    borderColor:COLORS.inactive,
  },
  timeText: {
    fontSize: 37,
    fontFamily: 'Poppins_600SemiBold',
  },
  selectedOption: {
    borderColor: 'orange',
  },
  colon: {
    fontSize: 40,
    paddingBottom: '3%',
  },
  buttonText: {
    fontSize: 18,
  },
  controls: {
    flexDirection: 'column',
    gap: 5,
  },
  controlButton: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    color: COLORS.inactive,
  },
});