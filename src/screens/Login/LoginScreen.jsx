import React, { useState, useContext } from 'react';
import { Text, View, Button, TextInput, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../contexts/UserContext';
import { login } from '../../api/usuarios';
import { styles } from './LoginScreen.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginScreen = () => {
  const navigation = useNavigation();
  const { setCredentials, setUserId } = useContext(UserContext); // Obtener setters del contexto
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToMainScreen = () => {
    navigation.navigate('Main', { screen: 'Home' }); // Navegar al MainScreen
  };

  const goToRegister = () => {
    navigation.navigate('Register');
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

      const response = await login(data);

      if (response.token.token) {
        // Guardar el ID del usuario en AsyncStorage
        await AsyncStorage.setItem('userId', JSON.stringify(response.user.id));

        setCredentials({
          token: response.token, // Aquí corregido
          user: response.user, // Esto incluye el ID del usuario
        });
        navigation.navigate('Main', { screen: 'Home' });
      } else {
        Alert.alert('Error', 'Credenciales inválidas. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        Alert.alert('Error', error.response.data.message);
      } else {
        Alert.alert('Error', 'Hubo un error en la autenticación. Por favor, intenta nuevamente.');
      }
    }
  };



  return (
    <View style={styles.container}>
      <Text style={styles.title}>QhapaqTour</Text>
      <Text style={styles.subTitle}>Ingresa a tu cuenta</Text>
      <TextInput
        style={styles.input}
        placeholder="Tu email o nombre de usuario"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Tu contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.separator}></View>
      <Button title="Ingresar" onPress={handleLogin} />
      <View style={styles.separator}></View>
      <Button title="Continuar como invitado" onPress={goToMainScreen} />
      <View style={styles.separator}></View>
      <View style={styles.registerContainer}>
        <Text>¿No tienes cuenta?</Text>
        <TouchableOpacity onPress={goToRegister}>
          <Text style={styles.buttonText}>Registrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


