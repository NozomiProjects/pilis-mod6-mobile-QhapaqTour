import { Modal, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./ModalInfo.styles";

export const ModalInfo = ({ isVisible, content, handleClose }) => {
//   const [isVisible, setIsVisible] = useState(false);

  return (
    <Modal transparent={true} visible={isVisible} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.modalText}>{content}</Text>
          <TouchableOpacity onPress={handleClose} style={styles.button}>
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
