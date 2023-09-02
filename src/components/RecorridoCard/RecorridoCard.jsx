import React, { useState } from "react";
import { Text, Pressable, View, Image } from "react-native";
import { styles } from "./RecorridoCard.styles";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { COLORS } from "./../../utils/theme";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";

export const RecorridoCard = ({ item }) => {
  //TODO: Calcular promedio de calificaciones
  //TODO: Dar formato a la duracion y al precio
  //TODO: Implementar funcion de favoritos
  //TODO: Agregar animacion al boton favoritos

  // Código de icono de corazón
  const toggleLike = (item) => {
    // Cambia el estado del elemento actual
    // item.Favorito = !item.Favorito;
  }

  return (
    <Pressable>
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.lugar.url }} style={styles.itemImage} />
          <Pressable onPress={toggleLike} style={styles.heartIconContainer}>
            <Ionicons
              name={item.esFavorito ? "heart-sharp" : "heart-outline"}
              size={24}
              color={COLORS.primary}
              style={styles.heartIcon}
            />
          </Pressable>
        </View>
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemLugar}>{item.lugar.nombre}</Text>
          <Text style={styles.itemLocalidad}>
            <Ionicons
              name="md-location-sharp"
              size={24}
              color={COLORS.primary}
            />
            {item.lugar.localidad}
          </Text>
          <View style={styles.itemRowContainer}>
            <Text style={styles.itemTiempo}>{item.duracion}</Text>
            <Text style={styles.itemPrecio}>{item.precio} ARS</Text>
          </View>
          <View style={styles.itemRowContain}>
            <View style={styles.itemRowContain}>
              <Image
                source={{ uri: item.lugar.url }}
                style={styles.itemImgGuia}
              />
              <Text style={styles.itemGuia}>{item.guia.id}</Text>
            </View>
            <Text style={styles.itemCalificacion}>
              5
              <Entypo name="star" size={14} color={COLORS.primary} />
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
