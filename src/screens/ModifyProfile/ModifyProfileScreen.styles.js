import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tertiary,
    alignItems: "center",
    justifyContent: "center",
    gap: 20
  },
  avatar: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.white,
  },

  inputContainer: {
    gap: 2,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: COLORS.secondary,
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: COLORS.white,
    borderColor: COLORS.grey,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    fontFamily: 'Poppins_400Regular',
  },
  
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
  },
});
