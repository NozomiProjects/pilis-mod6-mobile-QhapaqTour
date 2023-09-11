import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/theme';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  innerContainer: {
    backgroundColor: 'white',
    width: '200',
    aspectRatio: 2 / 3,
    padding: 7,
    height:'150',
    borderRadius:10,
  },
  title: {
    fontSize: 20,
    marginBottom: 1,
    fontWeight:'bold',
    textAlign:'center',
    },
  subtitle: {
    fontSize: 10,
    color: 'gray',
    marginBottom: 1,
    marginLeft:'26%'
  },
  itemStart:{
    fontSize:20,
    padding:3,
    color:COLORS.primary,
    marginLeft:10,
  },
  starContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    
  },
  commentInput: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    borderRadius:20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom:0,
    paddingBottom:0,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  itemBtn:{
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    padding: 9,
    marginLeft:1,
    marginBottom:0,
  }
});
