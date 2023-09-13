import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { styles } from './ReservasScreen.styles';
import { myReservas } from '../../api/reserva'; // Importa la función myReservas

export const ReservasScreen = () => {

  const [reservas, setReservas] = useState([]); // Estado para almacenar las reservas

  useEffect(() => {
    // Aquí realizas la solicitud a myReservas cuando el componente se monte
    async function fetchReservas() {
      try {
        const reservas = await myReservas();
        console.log('Reservas del usuario:', reservas);
        // Actualiza el estado o muestra las reservas en la pantalla
        setReservas(reservas);
      } catch (error) {
        console.error('Error al obtener las reservas:', error);
      }
    }

    fetchReservas();
  }, []); // El segundo argumento [] asegura que esto solo se ejecute una vez cuando el componente se monte

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>ReservasScreen</Text>
        {/* Mapea las reservas y muestra los datos relevantes */}
        {reservas.map((reserva, index) => (
          <View key={reserva.id} style={[styles.reservaItem, index !== reservas.length - 1 && styles.reservaSeparator]}>
            <Text>Nombre del lugar: {reserva.nombre_lugar}</Text>
            <Text>Localidad: {reserva.nombre_localidad}</Text>
            <Text>Región: {reserva.nombre_region}</Text>
            <Text>Guía: {reserva.nombre_guia}</Text>
            <Text>Apellido del guía: {reserva.apellido_guia}</Text>
            <Text>Cantidad de personas: {reserva.cantidadPersonas}</Text>
            <Text>Precio: {reserva.precio}</Text>
            <Text>Pago: {reserva.pago}</Text>
            {/* Agrega más detalles de la reserva según tu estructura de datos */}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};