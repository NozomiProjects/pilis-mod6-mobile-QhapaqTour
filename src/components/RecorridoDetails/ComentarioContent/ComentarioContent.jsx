import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./ComentarioContent.styles";
import { ComentarioCard } from "../../ComentarioCard/ComentarioCard";
import { ComentarioModal } from "../../ComentarioModal/ComentarioModal";
import { getComentariosByRecorrido } from "../../../api/recorridos";
import { UserContext } from "../../../contexts/UserContext";

export const ComentarioContent = ({ item }) => {
  const { credentials } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const toggleModal = () => {
    if (!credentials?.token) {
      navigation.navigate("Login");
    }

    setModalVisible((prev) => !prev);
  };

  const closeModal = () => setModalVisible(false);

  useEffect(() => {
    setIsLoading(true);
    getComentariosByRecorrido(item.id)
      .then((res) => setData(res))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={toggleModal}>
        <Text style={styles.textButton}>Escribe una opinión</Text>
      </TouchableOpacity>
      <ComentarioModal
        visible={modalVisible}
        onClose={closeModal}
        item={item}
      />

      {isLoading ? (
        <Text>Cargando</Text>
      ) : data.length > 0 ? (
        data.map((item) => <ComentarioCard key={item.id} item={item} />)
      ) : (
        <Text>Se el primero en comentar</Text>
      )}
    </View>
  );
};
