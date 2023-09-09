import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import { COLORS } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginTop: StatusBar.currentHeight
  },
})