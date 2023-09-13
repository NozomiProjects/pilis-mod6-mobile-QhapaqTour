import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { styles } from "./GeneralContent.styles";
import { COLORS } from "../../../utils/theme";
import { formatDuration } from "../../../utils/format";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

export const GeneralContent = ({ item }) => {
  const { credentials } = useContext(UserContext)
  const navigation = useNavigation();

  const handlePress = () => {
    if (credentials) {
      navigation.navigate("NewReserva", { item })
    } else {
      navigation.navigate("Login")
    }
  }

  return (
    <>
      <View style={styles.mainContent}>
        <View style={styles.guideContainer}>
          <Image source={{ uri: item.lugar.url }} style={styles.guideImage} />
          <Text style={styles.guideName}>
            {item.nombre} {item.apellido}
          </Text>
        </View>

        <View style={styles.itemRowContainer}>
          <View style={styles.itemLabel}>
            <MaterialCommunityIcons
              name="ticket-account"
              style={styles.itemIcon}
              size={37}
              color={COLORS.primary}
            />
            <Text style={styles.itemLabelText}>Cupos</Text>
          </View>
          <Text style={styles.itemInfo}>{item.cantidadPersonas}</Text>
        </View>

        <View style={styles.itemRowContainer}>
          <View style={styles.itemLabel}>
            <Entypo
              name="back-in-time"
              style={styles.itemIcon}
              size={37}
              color={COLORS.primary}
            />
            <Text style={styles.itemLabelText}>Duración</Text>
          </View>
          <Text style={styles.itemInfo}>{formatDuration(item.duracion)}hs</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceValue}>${item.precio}</Text>
          <Text style={styles.priceTag}>/Por persona</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Reservar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
