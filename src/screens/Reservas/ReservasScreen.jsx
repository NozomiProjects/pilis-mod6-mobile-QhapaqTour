import { useContext, useEffect, useState } from "react";
import { FlatList, View, SafeAreaView, Text } from "react-native";
import { styles } from "./ReservasScreen.styles";
import { myReservas } from "../../api/reservas";
import { UserContext } from "../../contexts/UserContext";
import { ReservaCard } from "../../components/ReservaCard/ReservaCard";

export const ReservasScreen = () => {
  const { credentials } = useContext(UserContext);
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const token = credentials.token.token;
        const reservas = await myReservas(token);
        setReservas(reservas);
      } catch (error) {
        console.error("Error al obtener las reservas:", error);
      }
    };

    fetchReservas();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mis reservas</Text>
      </View>
      {reservas.length > 0 ?
      <FlatList
        data={reservas}
        renderItem={({ item }) => (
          <ReservaCard
            item={item}
            setReservas={setReservas}
          />
        )}
        keyExtractor={(item) => item.id}
        style={styles.content}
      />
      :<Text style={styles.text}>Aún no has realizado reservas.</Text>
      }
    </SafeAreaView>
  );
};
