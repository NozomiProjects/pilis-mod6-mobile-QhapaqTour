import React, { useContext, useEffect, useState } from 'react';
import { View, ScrollView, Text, Button, Alert } from 'react-native';
import { UserContext } from '../../contexts/UserContext';
import { styles } from './RecorridoDetailScreen.styles';

export const RecorridoDetailScreen = ({ route }) => {
  const { item } = route.params;
  const { currentUser } = useContext(UserContext);
  const [isAuthenticated, setIsAuthenticated] = useState(!!currentUser);


  useEffect(() => {
    // Esta función se ejecutará cada vez que cambie el valor de currentUser en el contexto.
    // Actualiza el estado isAuthenticated para mostrar u ocultar el botón de "Pagar".
    setIsAuthenticated(!!currentUser);
  }, [currentUser]);


  const handlePayment = () => {
    // Verificar si el usuario está logueado
    if (currentUser && currentUser.id) {
      // Aquí puedes agregar la lógica para procesar el pago
      Alert.alert('Pago', 'El pago se ha procesado correctamente.');
    } else {
      // Mostrar un mensaje si el usuario no está logueado
      Alert.alert('Necesitas iniciar sesión', 'Debes iniciar sesión para realizar el pago.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>RecorridoDetailScreen</Text>
        <Text>{item.lugar.nombre}</Text>
        {isAuthenticated ? ( // Verifica si el usuario está logueado
          <Button title="Pagar" onPress={handlePayment} />
        ) : (
          <Text>Necesitas crear un usuario para acceder al pago</Text>
        )}
      </View>
    </ScrollView>
  );
};
