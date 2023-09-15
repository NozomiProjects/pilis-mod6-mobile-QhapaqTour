import React, { useContext, useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { styles } from "./ReservasScreen.styles";
import { myReservas } from "../../api/reservas";
import { UserContext } from "../../contexts/UserContext";

export const ReservasScreen = () => {
  const { credentials } = useContext(UserContext);
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const token = credentials.token.token;
        const reservas = await myReservas(token);
        console.log("Reservas del usuario:", reservas);
        setReservas(reservas);
      } catch (error) {
        console.error("Error al obtener las reservas:", error);
      }
    };

    fetchReservas();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>ReservasScreen</Text>
        {/* Mapea las reservas y muestra los datos relevantes */}
        {reservas.map((reserva, index) => (
          <View
            key={reserva.id}
            style={[
              styles.reservaItem,
              index !== reservas.length - 1 && styles.reservaSeparator,
            ]}
          >
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
