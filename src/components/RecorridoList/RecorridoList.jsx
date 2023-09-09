import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { styles } from "./RecorridoList.styles";
import { RecorridoCard, RecorridoCardVertical } from "../index";

export const RecorridoList = ({ recorridos, recents, navigation }) => {
  const recentsList = recorridos.sort((recorridoA, recorridoB) => {
    let dateA = new Date(recorridoA.createdAt);
    let dateB = new Date(recorridoB.createdAt);
    return -(dateA - dateB);
  }).slice(0, 5);

  const mostRecommended = recorridos.sort((recorridoA, recorridoB) => {
    let notaA = recorridoA.calificaciones.reduce((acc, current) => acc + current.nota, 0) / recorridoA.calificaciones.length;
    let notaB = recorridoB.calificaciones.reduce((acc, current) => acc + current.nota, 0) / recorridoB.calificaciones.length;
    return -(notaA - notaB);
  }).slice(0, 5);

  return (
    <SafeAreaView style={styles.container}>
      {recents ? (
        <FlatList
          data={recentsList}
          renderItem={({ item }) => <RecorridoCardVertical item={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <FlatList
          data={mostRecommended}
          renderItem={({ item }) => <RecorridoCard item={item} />}
          keyExtractor={(item) => item.id}
          style={styles.itemList}
        />
      )}
    </SafeAreaView>
  );
};
