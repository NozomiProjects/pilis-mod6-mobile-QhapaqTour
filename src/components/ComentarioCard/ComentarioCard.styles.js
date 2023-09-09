import { Dimensions, StyleSheet, StatusBar } from "react-native";
import { COLORS, SPACING } from "../../utils/theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey
  },
  text: {
    fontSize: 20
  }

});
