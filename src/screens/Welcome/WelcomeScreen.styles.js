import { StyleSheet, StatusBar } from "react-native";
import { COLORS } from "../../utils/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tertiary,
    marginTop: StatusBar.currentHeight,
    // alignItems: "center",
    // justifyContent: "center",
    gap: 30,
  },
  header: {
    height: 200,
    paddingHorizontal: 20,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  userInfo: {
    gap: 5,
  },
  name: {
    fontSize: 24,
    fontFamily: "Manjari_700Bold",
    color: COLORS.white,
  },
  email: {
    fontSize: 16,
    fontFamily: "Manjari_700Bold",
    color: COLORS.white,
  },
  content: {
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  title: {
    fontSize: 24,
    fontFamily: "Poppins_500Medium",
  },
  button: {
    width: 300,
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  buttonText: {
    color: COLORS.secondary,
    fontSize: 18,
  }
});
