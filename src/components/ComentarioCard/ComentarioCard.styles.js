import { Dimensions, StyleSheet, StatusBar } from "react-native";
import { COLORS, SPACING } from "../../utils/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "lightgray",
    gap: 16
  },
  rightColumn: {
    flex: 1,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  itemRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2
  },
  itemName: {
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    color: COLORS.dark
  },
  itemRelativeTime: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: COLORS.secondary
  },
  itemComment: {
    marginTop: 1,
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: COLORS.secondary
  },
  starsContainer: {
    flexDirection: "row",
    gap: 4,
    justifyContent: "flex-end",
    marginTop: 10,
  },
  itemIconStar: {
    fontSize: 20,
    marginTop: 1,
    color: COLORS.primary,
  },
});
