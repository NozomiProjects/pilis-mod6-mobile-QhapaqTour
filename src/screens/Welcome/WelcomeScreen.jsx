import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { UserContext } from '../../contexts/UserContext';
import { COLORS } from '../../utils/theme';
import { getUserInfo } from '../../api/usuarios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; // Importa el hook useNavigation

export const WelcomeScreen = () => {
  // const [userData, setUserData] = useState(null);
  const { currentUser, setCurrentUser, setCredentials } = useContext(UserContext);
  const navigation = useNavigation(); // Obtiene el objeto de navegación

  const handleLogout = async () => {
    try {
      // Limpia los datos almacenados en AsyncStorage
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('userId');
      await AsyncStorage.removeItem('userEmail');

      // Limpia los datos en el contexto
      setCredentials(null);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Obtiene el ID del usuario desde AsyncStorage
        const userId = await AsyncStorage.getItem('userId');
        if (userId) {
          // Obtiene los datos del usuario utilizando el ID
          const fetchedUserData = await getUserInfo(userId);
          setCurrentUser(fetchedUserData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  const handleFavorites = () => {
    // Navegar a la pantalla FavoritesScreen aquí.
    navigation.navigate('Favorites');
  };

  const handleReservas = () => {
    // Navegar a la pantalla ReservasScreen aquí.
    navigation.navigate('Reservas');
  };

  const handleModificarPerfil = () => {
    // Navegar a la pantalla de modificación de perfil (ModifyProfileScreen) aquí.
    navigation.navigate('ModifyProfile');
  };

  return (
    <View style={styles.container}>
      {currentUser ? ( // Verifica si userData se ha cargado
        <>
          <Text>¡Bienvenido/a, {currentUser.nombre || 'Usuario'}!</Text>
          <Text>Correo electrónico: {currentUser.email || 'No disponible'}</Text>
        </>
      ) : (
        <Text>Cargando datos...</Text>
      )}
      <TouchableOpacity onPress={handleFavorites} style={styles.button}>
        <Text style={styles.buttonText}>Ir a Favoritos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleReservas} style={styles.button}>
        <Text style={styles.buttonText}>Ir a Reservas</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleModificarPerfil} style={styles.button}>
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