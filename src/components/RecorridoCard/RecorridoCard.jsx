import React, { useContext, useEffect, useState } from "react";
import { Text, Pressable, View, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { styles } from "./RecorridoCard.styles";
import { COLORS } from "./../../utils/theme";
import { FavoritesContext } from "../../contexts/FavoritesContext";

const formatDuration = (duration) => Math.floor(duration / 1000 / 60 / 60);

const calculateRating = (ratings) => {
  // if (!ratings || ratings.length === 0) {
  //   return 0; // Handle the case where there are no ratings.
  // }
  const totalRating = ratings.reduce((accumulator, calificacion) => accumulator + calificacion.nota, 0);
  return totalRating / ratings.length;
};

export const RecorridoCard = ({ item }) => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  const { favorites, setFavorites } = useContext(FavoritesContext);
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  useEffect(() => {
    if (favorites.includes(item.id)) { // Verificar que 'item' esté definido
      setIsFavorite(true);
    }
  }, []);

  useEffect(() => {
    const saveFavorites = async () => {
      try {
        await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
      } catch (error) {
        console.error(error);
      }
    };
    saveFavorites();
  }, [favorites]);

  const toggleLike = () => {
    setIsFavorite((prev) => !prev);
    setFavorites((prev) => {
      if (prev.includes(item.id)) { // Verificar que 'item' esté definido
        return prev.filter((id) => id !== item.id);
      }
      return item ? [...prev, item.id] : prev; // Verificar que 'item' esté definido
    });
  };

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Pressable onPress={() => navigation.navigate('RecorridoDetail', { item })}>
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
            <Text style={styles.itemTiempo}>{formatDuration(item.duracion)} hs</Text>
            <Text style={styles.itemPrecio}>{item.precio} ARS</Text>
          </View>
          <View style={styles.itemRowContainer}>
            <View style={styles.itemRowContainer}>
              <Image
                source={{ uri: item.lugar.url }}
                style={styles.itemImgGuia}
              />
              <Text style={styles.itemGuia}>{item.username ? item.username : 'Nombre no disponible'}</Text>
            </View>
            <View style={styles.itemCalificacionContainer}>
              <Entypo name="star" size={16} color={COLORS.primary} />
              <Text style={styles.itemCalificacion}>{calculateRating(item.calificaciones)}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};