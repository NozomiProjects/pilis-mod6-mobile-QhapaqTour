import React, { useContext, useEffect, useState } from "react";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import { useFonts, Poppins_600SemiBold, Poppins_800ExtraBold } from "@expo-google-fonts/poppins";
import { styles } from "./HomeScreen.styles";
import { RecorridoList } from "../../components/RecorridoList/RecorridoList";
import { getRecorridos } from "../../api/recorridos";
import { RegionContext } from "../../contexts/RegionContext";

export const HomeScreen = ({ navigation }) => {
  const [recorridos, setRecorridos] = useState([]);
  const { setRegion } = useContext(RegionContext);

  const handleNavigate = (region) => {
    setRegion(region);
    navigation.navigate('Explore');
  }

  useEffect(() => {
    getRecorridos()
      .then((res) => {
        setRecorridos(res);
      })
      .catch((error) => console.warn(error));
  }, []);

  let [fontsLoaded, fontError] = useFonts({
    Poppins_600SemiBold,
    Poppins_800ExtraBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Región</Text>
      <View style={styles.regionesContainer}>
        <Pressable onPress={() => handleNavigate('YUNGAS')}>
          <View style={styles.regionItem}>
            <Image
              source={require("../../../assets/images/yungas.jpg")}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.regionText}>Yungas</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => handleNavigate('QUEBRADA')}>
          <View style={styles.regionItem}>
            <Image
              source={require("../../../assets/images/quebrada.jpg")}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.regionText}>Quebrada</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => handleNavigate('PUNA')}>
          <View style={styles.regionItem}>
            <Image
              source={require("../../../assets/images/puna.jpg")}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.regionText}>Puna</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => handleNavigate('VALLE')}>
          <View style={styles.regionItem}>
            <Image
              source={require("../../../assets/images/valles.jpg")}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.regionText}>Valles</Text>
          </View>
        </Pressable>
      </View>

      <Text style={styles.title}>Recientes</Text>
      <RecorridoList recorridos={recorridos} recents />

      <Text style={styles.title}>Más votados</Text>
      <RecorridoList recorridos={recorridos} />
    </SafeAreaView>
  );
};

