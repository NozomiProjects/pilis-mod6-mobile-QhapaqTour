import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const LoginScreen = () => {
  const navigation = useNavigation();

  const goToMainScreen = () => {
    navigation.navigate('Main'); // Navegar al MainScreen
  };

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
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
});


