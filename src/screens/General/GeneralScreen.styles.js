import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/theme';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.tertiary,
      },
      itemRowContainerBtn:{
        flexDirection: 'row',
        borderWidth:1,
        borderColor:COLORS.inactive,
        justifyContent: 'space-between',
        marginTop: '2%',
        verticalAlign: 'bottom',
        alignItems: 'center',
        paddingBottom:7,
        paddingTop:7,
        backgroundColor:COLORS.white,   
      },  
      itemBoton: {
        backgroundColor: COLORS.primary, // Cambia el color de fondo según tus preferencias
        borderRadius: 50, // Establece el radio de borde para hacerlo muy redondeado
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginRight:20,
      },
      itemTextoBoton: {
        color: 'white', // Cambia el color del texto según tus preferencias
        textAlign: 'center',
        fontSize: 13,
      },
    
    }
)