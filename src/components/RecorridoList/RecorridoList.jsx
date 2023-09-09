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
    let noteA = recorridoA.calificaciones.reduce((acc, current) => acc + current.note, 0) / recorridoA.calificaciones.length;
    let noteB = recorridoB.calificaciones.reduce((acc, current) => acc + current.note, 0) / recorridoB.calificaciones.length;
    return -(noteA - noteB);
  }).slice(0, 5);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={recents ? recentsList : mostRecommended}
        renderItem={({ item }) => (
          recents ? (
            <RecorridoCardVertical item={item} />
          ) : (
            <RecorridoCard item={item} />
          )
        )}
        keyExtractor={(item) => item.id} // Utiliza "idRecorrido" como el identificador
        horizontal={recents}
        showsHorizontalScrollIndicator={false}
        style={recents ? null : styles.itemList} // Aplica el estilo solo cuando recents sea falso
      />
    </SafeAreaView>
  );
};
