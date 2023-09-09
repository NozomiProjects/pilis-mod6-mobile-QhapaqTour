import React from "react";
import { ImageBackground, Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { Manjari_700Bold } from "@expo-google-fonts/manjari";
import { styles } from "./RecorridoDetailScreen.styles";
import { HeadCard } from "../../components/HeadCard/HeadCard";
import { DetalleCard } from "../../components/DetalleCard/DetalleCard";
import { TresBtnCard } from "../../components/TresBtnCard/TresBtnCard";
import { COLORS } from "../../utils/theme";
import { calculateRating } from "../../utils/rating";

const formatDuration = (duration) => Math.floor(duration / 1000 / 60 / 60);

export const RecorridoDetailScreen = ({ route }) => {
  const { item } = route.params;
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Manjari_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ScrollView styles={styles.container}>
      <View style={styles.headerContainer}>
        <ImageBackground
          source={{ uri: item.lugar.url }}
          style={styles.backgroundImage}
        >
          <Text style={styles.itemTitle}>{item.lugar.nombre}</Text>
          <Text style={styles.itemSubtitle}>{item.lugar.region}</Text>
          <View style={styles.iconContainer}>
            <View style={styles.leftContainer}>
              <Ionicons
                name="star"
                size={24}
                color={COLORS.white}
                style={styles.starIcon}
              />
              <Text style={styles.stars}>
                {calculateRating(item.calificaciones)}
              </Text>
            </View>
            <View style={styles.rightContainer}>
              <Ionicons
                name="md-heart-sharp"
                style={styles.rightHeartIcon}
                size={24}
                color="black"
              />
            </View>
          </View>
        </ImageBackground>
      </View>

      <TresBtnCard />

      <View style={styles.itemRowContain}>
            <Image
             source={require('../../../assets/images/puna.jpg')} // Reemplaza 'ruta_de_tu_imagen.jpg' con la ruta de tu imagen de fondo
             style={styles.itemImgGuia}
             />

            <Text style={styles.itemGuia}>{item.nombre} {item.apellido}</Text>
        </View>
        <View style={styles.itemRowContain}>
            <MaterialCommunityIcons name="ticket-account" size={37} color="black" />
            <Text style={styles.itemCupos}>Cupos</Text>
            <View style={styles.itemRowContainer}>
                <Text style={styles.itemCupoCantidad}>{item.cantidadPersonas}</Text>
            </View>
        </View>
        
        {/* <View style={styles.itemRowContainer}> */}
        <View style={styles.itemRowContain}>
            <Entypo name="back-in-time" style={styles.itemIcono} size={37} color="black" />
            <Text style={styles.itemDuracion}>Duración</Text>
            <View style={styles.itemRowContainer}>
              <Text style={styles.itemTime}>{formatDuration(item.duracion)}hs</Text>
            </View>
        </View>
        {/* </View>      */}
        <View style={styles.itemRowContainerBtn}>
            <View style={styles.itemRowContain}>
                <Text style={styles.itemPrecio}>${item.precio}</Text>
                <Text style={styles.itemPrecioPalabra}>/Por persona</Text>
            </View>            
            <TouchableOpacity
                style={styles.itemBoton}
                onPress={() => {}}>
                <Text style={styles.itemTextoBoton}>Reservar</Text>
             </TouchableOpacity>
        </View>
    </ScrollView>
  );
};
