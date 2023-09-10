import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/theme';

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      marginTop:"1%",
    },
    itemEntrada: {
      flex: 1,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 20,
      paddingHorizontal: 10,
      marginRight: 10,
    },
    itemBoton: {
      backgroundColor: COLORS.primary, // Cambia el color de fondo según tus preferencias
      borderRadius: 50, // Establece el radio de borde para hacerlo muy redondeado
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    itemTextoBoton: {
      color: 'white', // Cambia el color del texto según tus preferencias
      textAlign: 'center',
      fontSize: 12,
    },
  });
  