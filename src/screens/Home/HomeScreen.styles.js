import { StatusBar, StyleSheet } from "react-native";
import { COLORS } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
    textAlign: 'center'
  }
});
