import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "./HomeScreen.styles";
import { RecorridoList } from "../../components/RecorridoList/RecorridoList";
import { getRecorridos } from "../../api/recorridos";

export const HomeScreen = () => {
  const [recorridos, setRecorridos] = useState([])

  useEffect(() => {
    getRecorridos()
    .then(res => setRecorridos(res))
    .catch(error => console.warn(error))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Región</Text>
      <View style={styles.regionesContainer}>
        <View style={styles.regionItem}>
          <Image
            source={require("../../../assets/images/yungas.jpg")}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.regionText}>Yungas</Text>
        </View>
        <View style={styles.regionItem}>
          <Image
            source={require("../../../assets/images/quebrada.jpg")}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.regionText}>Quebrada</Text>
        </View>
        <View style={styles.regionItem}>
          <Image
            source={require("../../../assets/images/puna.jpg")}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.regionText}>Puna</Text>
        </View>
        <View style={styles.regionItem}>
          <Image
            source={require("../../../assets/images/valles.jpg")}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.regionText}>Valles</Text>
        </View>
      </View>

      <Text style={styles.title}>Recientes</Text>
      <View>
        {/* <ScrollView horizontal pagingEnabled >
        </ScrollView> */}
      </View>

      <Text style={styles.title}>Más votados</Text>
      <RecorridoList recorridos={recorridos} />
    </SafeAreaView>
  );
};
