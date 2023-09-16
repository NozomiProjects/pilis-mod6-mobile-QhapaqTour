import { Modal, View, Text, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./ReservaCard.styles";
import { formatDate } from "../../utils/format";
import { useState } from "react";
import { cancelReserva } from "../../api/reservas";

export const ReservaCard = ({ item, setReservas }) => {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => setIsVisible(false);

  const handleCancel = () => {
    closeModal();
  };

  const handleConfirm = async (reservaId) => {
    await cancelReserva(reservaId);
    setReservas((prev) => prev.filter((reserva) => reserva.id !== reservaId));
    closeModal();
  };

  return (
    <>
      <View style={styles.reservaItem}>
        <View style={styles.location}>
          <Ionicons name="md-location-sharp" size={16} style={styles.icon} />
          <View>
            <Text style={styles.text}>
              {item.nombre_lugar}, {item.nombre_localidad}
            </Text>
            <Text style={styles.text}>{item.nombre_region}</Text>
          </View>
        </View>

        <View style={styles.itemText}>
          <Ionicons name="calendar" size={24} style={styles.icon} />
          <Text style={styles.text}>{formatDate(item.fecha)}</Text>
        </View>

        <View style={styles.itemText}>
          <MaterialCommunityIcons
            name="steering"
            size={24}
            style={styles.icon}
          />
          <Text style={styles.text}>
            {item.nombre_guia} {item.apellido_guia}
          </Text>
        </View>

        <View style={styles.itemText}>
          <Ionicons name="people" size={24} style={styles.icon} />
          <Text style={styles.text}>
            {item.cantidadPersonas}{" "}
            {item.cantidadPersonas === 1 ? "persona" : "personas"}
          </Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.price}>${item.precio}</Text>
          <TouchableOpacity style={styles.button} onPress={openModal}>
            <Text style={styles.buttonText}>CANCELAR</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal transparent={true} visible={isVisible} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>{item.nombre_lugar}</Text>
            <Text style={styles.subtitle}>¿Desea cancelar esta reserva?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => handleConfirm(item.id)}
                style={styles.itemBtn}
              >
                <Text style={styles.buttonText}>Si</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCancel} style={styles.itemBtn}>
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};
