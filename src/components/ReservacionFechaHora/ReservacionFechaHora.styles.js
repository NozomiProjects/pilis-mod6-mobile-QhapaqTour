import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/theme';
export const styles = StyleSheet.create({
  container: {
    marginBottom:10,
    marginTop:5,
    backgroundColor: COLORS.tertiary,
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
});