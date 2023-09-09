import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { styles } from "./RecorridoList.styles";
import { RecorridoCard, RecorridoCardVertical } from "../index";

export const RecorridoList = ({ recorridos, recents }) => {
  const recentsList = recorridos.sort((recorridoA, recorridoB) => {
    let dateA = new Date(recorridoA.createdAt);
    let dateB = new Date(recorridoB.createdAt);
    return -(dateA - dateB);
  }).slice(0, 5);

  const mostRecommended = recorridos.sort((recorridoA, recorridoB) => {
    let notaA = recorridoA.calificaciones.reduce((acc, current) => acc + current.nota, 0) / recorridoA.calificaciones.length || 0;
    
    let notaB = recorridoB.calificaciones.reduce((acc, current) => acc + current.nota, 0) / recorridoB.calificaciones.length || 0;
    return -(notaA - notaB);
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
