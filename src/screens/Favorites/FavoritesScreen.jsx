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

  // Filtra los recorridos favoritos que están en los datos disponibles
  const filteredRecorridos = data.filter((recorrido) => favorites.includes(recorrido.id));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.itemRowContainer}>
        <Text style={styles.itemTitulo}>Favoritos</Text>
      </View>
      {filteredRecorridos.length > 0 ? (
        <FlatList
          data={filteredRecorridos}
          renderItem={({ item }) => (
            <RecorridoCard item={item} />
          )}
          keyExtractor={(item) => item.id} // Manejo de elementos sin id
          style={styles.itemList}
        />
      ) : (
        <Text>No tienes recorridos favoritos.</Text>
      )}
    </SafeAreaView>
  );
};
