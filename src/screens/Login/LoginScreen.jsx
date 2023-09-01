import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';

export const LoginScreen = () => {
  const navigation = useNavigation();
  const { setCurrentUser } = useContext(UserContext); // Obtenemos el setter del contexto
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToMainScreen = () => {
    navigation.navigate('Main'); // Navegar al MainScreen
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor ingresa un correo electrónico y una contraseña.');
      return;
    }
    try {
      const data = {
        email,
        password,
      };

      console.log('Sending login request with data:', data); // Agregado para depuración

      const response = await login(data);

      console.log('Response from login API:', response); // Agregado para depuración

      if (response.token) {
        setCurrentUser({ token: response.token.token }); // Actualiza el contexto con el token de acceso
        navigation.navigate('Main');
      } else {
        Alert.alert('Error', 'Credenciales inválidas. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error during login:', error);

      if (error.response && error.response.data && error.response.data.message) {
        Alert.alert('Error', error.response.data.message);
      } else {
        Alert.alert('Error', 'Hubo un error en la autenticación. Por favor, intenta nuevamente.');
      }
    }
  };

  const login = async (data) => {
    try {
      const response = await axios.post('http://192.168.1.254:3000/api/signin', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      console.error(error);
      console.error('Error during login request:', error);
      throw error;
    }
  };


  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico o cuenta"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.separator}></View>
      <Button title="Iniciar sesión" onPress={handleLogin} />
      <View style={styles.separator01}></View>
      <Button title="Entrar como invitado" onPress={goToMainScreen} />
      <StatusBar style="auto" />
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

  input: {
    width: 250,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
  },

  separator: {
    height: 20, // Ajusta la altura según tus preferencias
  },

  separator01: {
    height: 20, // Ajusta la altura según tus preferencias
  },
});


