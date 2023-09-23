import { StyleSheet, StatusBar } from "react-native";
import { COLORS } from "../../utils/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  bgImage: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    fontFamily: 'Manjari_700Bold',
    color: COLORS.white,
    textAlign: 'center',
  },
  content: {
    flex: 2.8,
  },
  whiteBackground: {
    height: '100%',
    justifyContent: 'center',
    gap: 20,
    paddingHorizontal: 20
  },
  subTitle: {
    fontSize: 28,
    fontFamily: 'Poppins_500Medium',
    textAlign: 'center',
  },
  input: {
    borderColor: COLORS.secondary,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    fontFamily: 'Poppins_400Regular'
  },
  errorText: {
    color: COLORS.danger,
    fontFamily: 'Poppins_400Regular'
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
  registerContainerText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
  },
  primaryText: {
    color: COLORS.primary,
    fontFamily: 'Poppins_400Regular',
    fontSize: 16
  },
  button: {
    width: 250,
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignSelf: 'center'
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center'
  },
});
