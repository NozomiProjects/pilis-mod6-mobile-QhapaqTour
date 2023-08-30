import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
    try {
      const response = await fakeAuthenticationAPI(email, password);
      if (response.success) {
        setCurrentUser({ email }); // Actualizamos el contexto con los datos del usuario
        navigation.navigate('Main');
      } else {
        Alert.alert('Error', 'Credenciales inválidas. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      Alert.alert('Error', 'Hubo un error en la autenticación. Por favor, intenta nuevamente.');
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
      <Button title="Iniciar sesión" onPress={handleLogin} />
      <Button title="Ir a MainScreen" onPress={goToMainScreen} />
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
});


