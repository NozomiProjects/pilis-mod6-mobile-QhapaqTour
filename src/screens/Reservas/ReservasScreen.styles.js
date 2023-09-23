import { StyleSheet, StatusBar, Dimensions } from "react-native";
import { COLORS } from "../../utils/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.sec,
    marginTop: StatusBar.currentHeight,
  },
  header: {
    height: 100,
    paddingHorizontal: 20,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: "Poppins_500Medium",
    color: COLORS.white,
  },
  content: {
    padding: 20,
  },
  text: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30
  }
});
