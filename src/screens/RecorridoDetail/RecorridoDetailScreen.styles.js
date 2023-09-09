import { Dimensions, StyleSheet, StatusBar } from 'react-native';
import { COLORS } from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tertiary,
    marginTop: StatusBar.currentHeight
  },
  carComentario:{
      marginTop:10,
  },

  // Header
  headerContainer: {
    flex: 1,
    height: 300,
    // marginBottom: 60,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    height: '100%',
    color:'black',
  },
  itemTitle: {
    fontSize: 24,
    fontFamily: 'Manjari_700Bold',
    color: COLORS.white,
    // marginBottom: 0,
  },
  itemSubtitle: {
    color: COLORS.white,
  },
  iconContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: StatusBar.currentHeight + 20,
    left: 0,
    right: 0
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    marginRight: 8,
  },
  stars: {
    color: COLORS.white
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightHeartIcon: {
    color: COLORS.primary, // Cambia esto al color deseado
  },

  detailsContainer: {
    paddingHorizontal: 30
  },
  itemUser: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 4,
  },
  avatarUser: {
    width: 50,
    height: 50,
    borderRadius: 100,    
    marginRight:4,
    resizeMode: 'cover'
  },
  fullname: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold'
  },


  itemRowContain: {
      // marginLeft:'7%',
      paddingHorizontal: 20,
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
      fontSize: 16,
      paddingLeft:'7%',
      marginLeft:1,
    },
    itemCupoCantidad: {   
      fontSize: 16,
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
      marginBottom: 1,
      marginHorizontal: 0,
      fontSize: 16,
      paddingLeft:'7%',
      marginLeft:1,
    },
    itemTime: {   
      fontSize: 16,
      color: COLORS.secondary,
      marginLeft:'65%',
      alignContent:'flex-end',
      marginVertical: 40,
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
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '30%',
      verticalAlign: 'bottom',
      alignItems: 'center',
      marginRight:'7%',
      paddingVertical: 16,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: COLORS.grey
    },
    itemBoton: {
      backgroundColor: COLORS.primary, // Cambia el color de fondo según tus preferencias
      borderRadius: 50, // Establece el radio de borde para hacerlo muy redondeado
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginRight: 20,
    },
    itemTextoBoton: {
      color: 'white', // Cambia el color del texto según tus preferencias
      textAlign: 'center',
      fontSize: 13,
    },
    itemPrecio:{
        fontSize:25,          
        fontWeight:'bold',
       },
  itemPrecioPalabra:{
      fontSize:12,
     },
}
)