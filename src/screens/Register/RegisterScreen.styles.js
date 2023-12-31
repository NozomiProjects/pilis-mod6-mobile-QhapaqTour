import { StatusBar, StyleSheet } from 'react-native'
import { COLORS } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  bgImage: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  content: {
    padding: 24
  },
  title: {
    fontSize: 32,
    fontFamily: 'Manjari_700Bold',
    marginBottom: 16,
    textAlign: 'center',
    color: COLORS.white
  },
  subTitle: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 10,
    color: COLORS.white
  },
  input: {
    height: 40,
    backgroundColor: COLORS.white,
    borderColor: COLORS.secondary,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    marginTop: 16,
    fontFamily: 'Poppins_400Regular'
  },
  errorText: {
    color: COLORS.white,
    marginBottom: 8,
    fontFamily: 'Poppins_400Regular'
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginTop: 24,
    alignItems: 'center'
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold'
  },
})
