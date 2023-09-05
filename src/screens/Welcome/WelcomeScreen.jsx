import { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { UserContext } from '../../contexts/UserContext';
import { COLORS } from '../../utils/theme';

export const WelcomeScreen = () => {
  const { setCurrentUser } = useContext(UserContext)

  const handleLogout = () => {
    setCurrentUser(null)
  }
  return (
    <View style={styles.container}>
      <Text>Perfil de usuario</Text>
      <TouchableOpacity onPress={handleLogout} style={styles.button}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginTop: 24,
    alignItems: 'center'
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18
  },
});
