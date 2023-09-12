import { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { TresBtnCard } from "../../components/TresBtnCard/TresBtnCard";
import { COLORS } from "../../utils/theme";
import { calculateRating } from "../../utils/rating";
import { styles } from "./RecorridoDetailScreen.styles";
import { GeneralContent } from "../../components/GeneralContent/GeneralContent";
import { DetalleContent } from "../../components/DetalleContent/DetalleContent";
import { ComentarioContent } from "../../components/ComentarioContent/ComentarioContent";

export const RecorridoDetailScreen = ({ route }) => {
  const { item } = route.params;
  const [activeButton, setActiveButton] = useState("button1");
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      <View style={styles.headerContainer}>
        <ImageBackground
          source={{ uri: item.lugar.url }}
          style={styles.backgroundImage}
        >
          <View style={styles.headerContent}>
            <View style={styles.topContainer}>
              <View style={styles.leftContainer}>
                <Ionicons
                  name="star"
                  size={24}
                  color={COLORS.white}
                  style={styles.starIcon}
                />
                <Text style={styles.rating}>
                  {calculateRating(item.calificaciones) || 0}
                </Text>
              </View>
              <View style={styles.rightContainer}>
                <Ionicons
                  name="md-heart-sharp"
                  style={styles.rightHeartIcon}
                  size={24}
                  color={COLORS.white}
                />
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <Text style={styles.itemTitle}>{item.lugar.nombre}</Text>
              <Text style={styles.itemSubtitle}>{item.lugar.region}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.navbar}>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton !== "button1" && styles.buttonInactive,
          ]}
          onPress={() => setActiveButton("button1")}
        >
          <Text style={styles.buttonText}>General</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            activeButton !== "button2" && styles.buttonInactive,
          ]}
          onPress={() => setActiveButton("button2")}
        >
          <Text style={styles.buttonText}>Detalles</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            activeButton !== "button3" && styles.buttonInactive,
          ]}
          onPress={() => setActiveButton("button3")}
        >
          <Text style={styles.buttonText}>Comentarios</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.mainContent}> */}
        {activeButton === 'button1' && <GeneralContent item={item} />}
        {activeButton === 'button2' && <DetalleContent item={item} />}
        {activeButton === 'button3' && <ComentarioContent item={item} />}
      {/* </View> */}
    </ScrollView>
  );
};
