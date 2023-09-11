import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import { COLORS } from '../../utils/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        marginTop: StatusBar.currentHeight
    },

    reservaSeparator: {
        marginBottom: 16, // Puedes ajustar el valor según el espacio que desees entre las reservas
        borderBottomWidth: 1,
        borderBottomColor: '#ccc', // Color de la línea separadora
    },
})

