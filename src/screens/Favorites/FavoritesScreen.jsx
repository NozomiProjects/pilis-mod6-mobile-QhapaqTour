import React, { useContext, useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { styles } from "./FavoritesScreen.styles";
import { getRecorridos } from "../../api/recorridos";
import { RecorridoCard } from "../../components/RecorridoCard/RecorridoCard";
import { FavoritesContext } from "../../contexts/FavoritesContext";

export const FavoritesScreen = () => {
  const { favorites } = useContext(FavoritesContext)
  const [data, setData] = useState([]);

  useEffect(() => {
    getRecorridos()
      .then((res) => setData(res))
      .catch((error) => console.warn(error));
  }, []);
  
  const filteredRecorridos = data.filter((recorrido) => favorites.includes(recorrido.id));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.itemRowContainer}>
        <Text style={styles.itemTitulo}>Favoritos</Text>
      </View>
      <FlatList
        data={filteredRecorridos}
        renderItem={({ item }) => <RecorridoCard item={item} />}
        keyExtractor={(item) => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  );
};
