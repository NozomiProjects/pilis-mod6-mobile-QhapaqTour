import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins_800ExtraBold',
    marginVertical: 20,
    marginLeft: 25
  },
  regionesContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 40,
    justifyContent: 'center'
  },
  regionItem: {
    display: 'flex',
    gap: 10
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100
  },
  regionText: {
    fontSize: 12,
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center'
  }
});
