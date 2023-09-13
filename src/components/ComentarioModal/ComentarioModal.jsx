import React, { useContext, useState } from "react";
import { Modal, View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./ComentarioModal.styles";
import { Ionicons } from "@expo/vector-icons";
import { UserContext } from "../../contexts/UserContext";
import { createComentario } from "../../api/recorridos";

export const ComentarioModal = ({ visible, onClose, item }) => {
  const { credentials } = useContext(UserContext);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleStarClick = (starIndex) => setRating(starIndex);

  const handleCommentChange = (text) => setComment(text);

  const handleCancel = () => {
    setRating(0);
    setComment("");
    onClose();
  };

  const handlePublish = () => {
    const data = {
      comentario: comment,
      nota: rating,
    };
    createComentario(item.id, data, credentials.token.token)
    .then(res => console.log(res))
    .catch(error => console.error(error))
    
    setRating(0);
    setComment("");
    onClose();
  };

  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{item.lugar.nombre}</Text>
          <Text style={styles.subtitle}>Califica este recorrido</Text>
          <View style={styles.starContainer}>
            {[1, 2, 3, 4, 5].map((index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleStarClick(index)}
              >
                <Ionicons
                  name={index <= rating ? "star" : "star-outline"}
                  style={styles.itemStart}
                />
              </TouchableOpacity>
            ))}
          </View>
          <TextInput
            placeholder="Agrega un comentario..."
            onChangeText={handleCommentChange}
            value={comment}
            multiline
            numberOfLines={7}
            style={styles.commentInput}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleCancel} style={styles.itemBtn}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePublish} style={styles.itemBtn}>
              <Text style={styles.buttonText}>Publicar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
