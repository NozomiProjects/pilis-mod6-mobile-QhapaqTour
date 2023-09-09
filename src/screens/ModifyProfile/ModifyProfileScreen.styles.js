import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 24,
    marginBottom: 10,
  },

  input: {
    width: 250,
    height: 40,
    borderColor: COLORS.secondary,
    borderWidth: 1,
    borderRadius: 12,
    marginVertical: 10,
    paddingHorizontal: 10,
  },

  separator: {
    height: 20, // Ajusta la altura según tus preferencias
  },
  registerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginTop: 24,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
  },
});
