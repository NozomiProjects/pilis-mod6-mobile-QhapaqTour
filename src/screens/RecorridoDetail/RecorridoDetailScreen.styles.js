import { Dimensions, StyleSheet, StatusBar } from "react-native";
import { COLORS, SPACING } from "../../utils/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.tertiary,
  },
  headerContainer: {
    height: 300,
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
  },
  headerContent: {
    padding: 20,
    flex: 1,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  rating: {
    color: COLORS.white,
    fontSize: 24,
  },
  bottomContainer: {
    marginTop: "auto",
  },
  itemTitle: {
    fontSize: 24,
    fontFamily: "Poppins_600SemiBold",
    color: COLORS.white,
  },
  itemSubtitle: {
    color: COLORS.white,
    fontFamily: "Poppins_600SemiBold",
  },


  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: SPACING.md,
    borderBottomWidth: 1,
    borderBlockColor: COLORS.grey,
  },
  buttonInactive: {
    backgroundColor: COLORS.inactive
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
  },

});
