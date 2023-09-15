import { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { UserContext } from '../../contexts/UserContext';
import { COLORS } from '../../utils/theme';
import { getUserInfo } from '../../api/usuarios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export const WelcomeScreen = () => {
  const { currentUser, setCurrentUser, credentials, setCredentials } = useContext(UserContext);
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user');

      setCredentials(null);
      setCurrentUser(null);
    } catch (error) {
      console.error('Error durante el cierre de sesión:', error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = credentials.user.id
        const token = credentials.token.token
        if (userId && token) {
          const fetchedUserData = await getUserInfo(userId, token);
          setCurrentUser(fetchedUserData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  const handleNavigate = (to) => {
    navigation.navigate(to);
  }

  return (
    <View style={styles.container}>
      {currentUser ? (
        <>
          <Text>¡Bienvenido/a, {currentUser.nombre || 'Usuario'}!</Text>
          <Text>Correo electrónico: {currentUser.email || 'No disponible'}</Text>
        </>
      ) : (
        <Text>Cargando datos...</Text>
      )}
      <TouchableOpacity onPress={() => handleNavigate('Favorites')} style={styles.button}>
        <Text style={styles.buttonText}>Ir a Favoritos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigate('Reservas')} style={styles.button}>
        <Text style={styles.buttonText}>Ir a Reservas</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigate('ModifyProfile')} style={styles.button}>
        <Text style={styles.buttonText}>Modificar perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout} style={styles.button}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
  },
});