import { useContext, useEffect, useState } from "react";
import { Text, Pressable, View, Image } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { styles } from "./ComentarioCard.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../utils/theme";

export const ComentarioCard = ({ item }) => {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  console.log({ item });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.comentario}</Text>
      <Text>
        <Ionicons
          name="star"
          size={24}
          color={COLORS.primary}
          style={styles.starIcon}
        />
        {item.nota}
      </Text>
    </View>
  );
};
