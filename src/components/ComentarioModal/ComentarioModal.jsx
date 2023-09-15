import { Modal, View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./ComentarioModal.styles";
import { Ionicons } from "@expo/vector-icons";

export const ComentarioModal = ({ item, visible, comment, rating, setComment, setRating, handlePublish, handleCancel }) => {
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
                onPress={() => setRating(index)}
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
            onChangeText={setComment}
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
