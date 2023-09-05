import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/theme';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
     maxHeight:'30%',   
    },
    backgroundImage: {
      flex: 1,
      justifyContent: 'flex-end', // Alinea el texto en la parte inferior
      alignItems: 'flex-start',
    },
    itemTexto: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white', // Cambia esto al color deseado
      marginLeft:'3%',
      color:'black',
      marginBottom: 0, // Añade margen inferior para separar el texto de los iconos
    },
    iconContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    },
    leftContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    starIcon: {
      marginRight: 8,
      color: 'white', // Cambia esto al color deseado
    },
    rightContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rightHeartIcon: {
      color: COLORS.primary, // Cambia esto al color deseado
    },
  });