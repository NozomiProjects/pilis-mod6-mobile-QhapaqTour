import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/theme';
export const styles = StyleSheet.create({
     /*Codigo de contador de personas */
     container: {
        backgroundColor: COLORS.tertiary,
        marginTop:1,
        marginBottom:2
      },
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
});