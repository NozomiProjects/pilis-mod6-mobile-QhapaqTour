import { StyleSheet, StatusBar, Dimensions } from "react-native";
import { COLORS } from "../../utils/theme";

export const styles = StyleSheet.create({
  content: {
    padding: 20,
  },
  reservaItem: {
    width: '100%',
    padding: 15,
    marginBottom: 20,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    gap: 10,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  icon: {
    fontSize: 26,
    color: COLORS.secondary,
  },
  itemText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    color: COLORS.secondary,
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 26,
    fontFamily: "Poppins_500Medium",
    color: COLORS.secondary,
  },
  button: {
    width: 130,
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignSelf: 'flex-end'
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
  },



  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  innerContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
    gap: 12,
    shadowColor: COLORS.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    textAlign:'center',
    fontFamily: 'Manjari_700Bold'
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.secondary,
    textAlign:'center',
    fontFamily: 'Poppins_500Medium'
  },
  starContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center'
  },
  itemStart:{
    fontSize: 30,
    color: COLORS.primary,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  itemBtn:{
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  }
});
