import { useContext, useState, useEffect, useCallback } from "react";
import {
  Image,
  TouchableOpacity,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  FlatList,
  RefreshControl,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./HomeScreen.styles";
import { getRecorridos } from "../../api/recorridos";
import { RegionContext } from "../../contexts/RegionContext";
import { RecorridosContext } from "../../contexts/RecorridosContext";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { RecorridoCard, RecorridoCardVertical } from "../../components";

export const HomeScreen = ({ navigation }) => {
  const { recorridos, setRecorridos } = useContext(RecorridosContext);
  const { setFavorites } = useContext(FavoritesContext);
  const { setRegion } = useContext(RegionContext);
  const [refreshing, setRefreshing] = useState(false);

  const recentsList = recorridos
    .sort((recorridoA, recorridoB) => {
      let dateA = new Date(recorridoA.createdAt);
      let dateB = new Date(recorridoB.createdAt);
      return -(dateA - dateB);
    })
    .slice(0, 5);

  const mostRecommended = recorridos
    .sort((recorridoA, recorridoB) => {
      let notaA =
        recorridoA.calificaciones.reduce(
          (acc, current) => acc + current.nota,
          0
        ) / recorridoA.calificaciones.length || 0;
      let notaB =
        recorridoB.calificaciones.reduce(
          (acc, current) => acc + current.nota,
          0
        ) / recorridoB.calificaciones.length || 0;
      return -(notaA - notaB);
    })
    .slice(0, 5);

  const handleNavigate = (region) => {
    setRegion(region);
    navigation.navigate("Explore");
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await getRecorridos();
        setRecorridos(response);
        const favoritesJSON = await AsyncStorage.getItem("favorites");
        if (favoritesJSON) {
          setFavorites(JSON.parse(favoritesJSON));
        }
      } catch (error) {
        console.error(error);
      }
    };
    loadData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getRecorridos()
    .then(response => setRecorridos(response))
    .catch(error => console.log(error))
    .finally(() => setRefreshing(false))
  }, []);

  return (
    <ScrollView
      style={styles.container}
      nestedScrollEnabled
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Text style={styles.title}>Región</Text>
      <View style={styles.regionesContainer}>
        <TouchableOpacity onPress={() => handleNavigate("YUNGAS")}>
          <View style={styles.regionItem}>
            <Image
              source={require("../../../assets/images/yungas.jpg")}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.regionText}>Yungas</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigate("QUEBRADA")}>
          <View style={styles.regionItem}>
            <Image
              source={require("../../../assets/images/quebrada.jpg")}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.regionText}>Quebrada</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigate("PUNA")}>
          <View style={styles.regionItem}>
            <Image
              source={require("../../../assets/images/puna.jpg")}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.regionText}>Puna</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigate("VALLES")}>
          <View style={styles.regionItem}>
            <Image
              source={require("../../../assets/images/valles.jpg")}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.regionText}>Valles</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Recientes</Text>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={recentsList}
          renderItem={({ item }) => <RecorridoCardVertical item={item} />}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ padding: 10 }}
        />
      </SafeAreaView>

      <Text style={styles.title}>Más votados</Text>
      {mostRecommended.map((recorrido) => (
        <RecorridoCard key={recorrido.id} item={recorrido} />
      ))}
    </ScrollView>
  );
};
