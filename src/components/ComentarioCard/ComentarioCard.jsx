import { useContext, useEffect, useState } from "react";
import { Text, Pressable, View, Image } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { styles } from "./ComentarioCard.styles";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { getRelativeTime } from "../../utils/format";
import { COLORS } from "../../utils/theme";

export const ComentarioCard = ({ item }) => {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("./../../../assets/images/puna.jpg")}
        style={styles.profileImage}
      />
      <View style={styles.rightColumn}>
        <View style={styles.itemRowContainer}>
          <Text style={styles.itemName}>
            {item.nombre} {item.apellido}
          </Text>
          <Entypo name="dot-single" size={24} color={COLORS.secondary} />
          <Text style={styles.itemRelativeTime}>
            {getRelativeTime(item.fecha)}
          </Text>
        </View>

        <Text style={styles.itemComment}>{item.comentario}</Text>
        <View style={styles.starsContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Ionicons
              key={star}
              name={star <= item.nota ? "star" : "star-outline"}
              style={styles.itemIconStar}
            />
          ))}
        </View>
      </View>
    </View>
  );
};
