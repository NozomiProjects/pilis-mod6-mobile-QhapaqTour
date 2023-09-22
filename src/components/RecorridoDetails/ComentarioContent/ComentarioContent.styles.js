import { StyleSheet } from "react-native";
import { COLORS } from "../../../utils/theme";

export const styles = StyleSheet.create({
  container: { 
    alignItems: "center"
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 12,
    color: COLORS.white,
  },
  textButton: {
    color: COLORS.white,
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold'
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold'
  }
});
