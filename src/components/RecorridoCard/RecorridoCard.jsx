import React, { useContext, useEffect, useState } from "react";
import { Text, Pressable, View, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./RecorridoCard.styles";
import { COLORS } from "./../../utils/theme";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { calculateRating } from "../../utils/rating";
import { formatDuration } from "../../utils/format";

export const RecorridoCard = ({ item }) => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  const { favorites, setFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    console.log("Inicial: ", favorites);
    if (favorites.includes(item.id)) {
      setIsFavorite(true);
    }
  }, []);

  useEffect(() => {
    const saveFavorites = async () => {
      try {
        console.log("A guardar: ", favorites);
        await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
      } catch (error) {
        console.error(error);
      }
    };
    saveFavorites();
  }, [favorites]);

  const toggleLike = () => {
    console.log("Previo: ", favorites);
    setIsFavorite((prev) => !prev);
    setFavorites((prev) => {
      if (prev.includes(item.id)) {
        return prev.filter((id) => id !== item.id);
      }
      return item ? [...prev, item.id] : prev;
    });
  };

  return (
    <Pressable onPress={() => navigation.navigate("RecorridoDetail", { item })}>
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.lugar.url }} style={styles.itemImage} />
          <Pressable onPress={toggleLike} style={styles.buttonHeart}>
            <Ionicons
              name={isFavorite ? "heart-sharp" : "heart-outline"}
              size={24}
              color={COLORS.primary}
            />
          </Pressable>
        </View>
        <View style={styles.itemInformationContainer}>
          <Text style={styles.itemLugar}>{item.lugar.nombre}</Text>
          <View style={styles.itemLocalidadContainer}>
            <Ionicons
              name="md-location-sharp"
              size={16}
              color={COLORS.primary}
            />
            <Text style={styles.itemLocalidad}>{item.lugar.localidad}</Text>
          </View>
          <View style={styles.itemRowContainer}>
            <Text style={styles.itemTiempo}>
              {formatDuration(item.duracion)} hs
            </Text>
            <Text style={styles.itemPrecio}>{item.precio} ARS</Text>
          </View>
          <View style={styles.itemRowContainer}>
            <View style={styles.itemRowContainer}>
              <Image
                source={{ uri: item.lugar.url }}
                style={styles.itemImgGuia}
              />
              <Text style={styles.itemGuia}>
                {item.nombre} {item.apellido}
              </Text>
            </View>
            <View style={styles.itemCalificacionContainer}>
              <Ionicons name="star" size={16} color={COLORS.primary} />
              <Text style={styles.itemCalificacion}>
                {calculateRating(item.calificaciones) || 0}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
