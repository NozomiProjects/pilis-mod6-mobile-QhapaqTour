import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/theme';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
    },
    itemRowContain: {
        marginLeft:'7%',
        marginTop:'1%',
        flexDirection: 'row',
        alignItems: 'center',
        
      },
      itemGuia: {
        marginBottom: 1,
        marginHorizontal: 0,
        fontSize:18,
        marginLeft:'2%',
        marginRight:7,
        fontWeight:'bold',
      },
      itemTime: {   
        fontSize: 18,
        color: COLORS.secondary
      },
      itemCupos: {
        marginBottom: 1,
        marginHorizontal: 0,
        fontSize:18,
        paddingLeft:'7%',
        marginLeft:1,
      },
      itemCupoCantidad: {   
        fontSize: 18,
        color: COLORS.secondary,
        marginRight:'7%',
        marginLeft:'70%',
        alignContent:'flex-end',
        marginVertical:40,
      },
      itemIcono:{
        marginRight:'1%'
      },
      itemDuracion: {
        fontSize: 18,
        marginRight: '30%',
        marginLeft:1,
        color: 'black',
      },
      itemTime: {   
        fontSize: 18,
        color: COLORS.secondary
      },
    itemRowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
        
        alignItems: 'center',
        marginRight:'7%',
    
      },      
      itemImgGuia: {
        width: 50,
        height: 50,
        borderRadius: 40,    
        marginRight:4,
      },
      /**boton de RESERVA */
      itemRowContainerBtn:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '30%',
        verticalAlign: 'bottom',
        alignItems: 'center',
        marginRight:'7%',
    
      },
      itemPrecio:{
        fontSize:27,
        fontWeight:'bold',
    },
    itemPrecioPalabra:{
        fontSize:12,

       },
}
)