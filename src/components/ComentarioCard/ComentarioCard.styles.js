import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  leftColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin:'1%',
    minWidth:'7%',

  },
  rightColumn: {
    flex: 3,
    marginLeft: '1%',
    minWidth:'50%',
    marginRight:'1%'
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  itemDias: {
    fontSize: 12,
  },
  itemPrecio:{
    fontSize:13,          
    fontWeight:'bold',
    marginRight:'2%',
   },
   itemRowContain: {
    marginLeft:'1%',
    marginTop:'1%',
    flexDirection: 'row',
    alignItems: 'center',
    
  },
itemPrecioPalabra:{
  fontSize:12,
  marginLeft:'2%'
 },
  loremIpsum: {
    marginTop: 1,
    fontSize: 14,
    width:'100%',
    marginBottom:1,
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 1,
  },
  itemIconStar:{    
    fontSize: 14,
    marginTop:1,
    color:COLORS.primary,
  },
});