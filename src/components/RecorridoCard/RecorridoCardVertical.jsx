import React from "react";
import { Text, Pressable, View, Image } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { styles } from "./RecorridoCardVertical.styles";
import { COLORS } from "./../../utils/theme";
import { useNavigation } from "@react-navigation/native";
import { calculateRating } from "../../utils/rating";

export const RecorridoCardVertical = ({ item }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("RecorridoDetail", { item })}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.lugar.url }} style={styles.itemImage} />

        <View style={styles.itemInformationContainer}>
          <Text style={styles.itemLugar}>{item.lugar.nombre}</Text>
          <View style={styles.itemCalificacionContainer}>
            <Entypo name="star" size={16} color={COLORS.primary} />
            <Text style={styles.itemCalificacion}>
              {calculateRating(item.calificaciones) || 0}
            </Text>
          </View>
        </View>

        <View style={styles.itemLocalidadContainer}>
          <Ionicons name="md-location-sharp" size={16} color={COLORS.primary} />
          <Text style={styles.itemLocalidad}>{item.lugar.localidad}</Text>
        </View>
      </View>
    </Pressable>
  );
};
