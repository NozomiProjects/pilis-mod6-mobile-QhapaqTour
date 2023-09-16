import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./ComentarioContent.styles";
import { ComentarioCard } from "../../ComentarioCard/ComentarioCard";
import { ComentarioModal } from "../../ComentarioModal/ComentarioModal";
import { createComentario, getComentariosByRecorrido, getRecorridos } from "../../../api/recorridos";
import { UserContext } from "../../../contexts/UserContext";
import { RecorridosContext } from "../../../contexts/RecorridosContext";

export const ComentarioContent = ({ item }) => {
  const { credentials } = useContext(UserContext);
  const { setRecorridos } = useContext(RecorridosContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const navigation = useNavigation();

  const openModal = () => {
    if (!credentials?.token) {
      navigation.navigate("Login");
    }

    setIsVisible(true);
  }

  const closeModal = () => setIsVisible(false);

  const handleCancel = () => {
    setRating(0);
    setComment("");
    closeModal();
  };

  const handlePublish = () => {
    const body = {
      comentario: comment,
      nota: rating,
    };
    createComentario(item.id, body, credentials.token.token)
    .then(res => console.log(res))
    .catch(error => console.error(error))
    .finally(() => {
      setRating(0);
      setComment("");
      closeModal();
    })
  };

  useEffect(() => {
    if (isVisible) return
    setIsLoading(true);
    getComentariosByRecorrido(item.id)
      .then((res) => setData(res))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [isVisible]);

  useEffect(() => {
    getRecorridos()
      .then((res) => setRecorridos(res))
      .catch((error) => console.error(error))
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={openModal}>
        <Text style={styles.textButton}>Escribe una opinión</Text>
      </TouchableOpacity>
      <ComentarioModal
        visible={isVisible}
        handlePublish={handlePublish}
        handleCancel={handleCancel}
        setComment={setComment}
        setRating={setRating}
        comment={comment}
        rating={rating}
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
