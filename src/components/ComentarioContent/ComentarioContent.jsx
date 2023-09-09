import React from "react";
import { View, Text, FlatList } from "react-native";
import { CometarioBtnCard } from "../ComentarioBtnCard/CometarioBtnCard";
import { ComentarioCard } from "../ComentarioCard/ComentarioCard";
import { styles } from "./ComentarioContent.styles";

export const ComentarioContent = ({ item }) => {
  return (
    <View>
      {item.calificaciones.length > 0
        ? item.calificaciones.map((item) => (
            <ComentarioCard key={item.id} item={item} />
          ))
        : "Se el primero en comentar"}
     

      {/* {item.calificaciones.length > 0 ? (
        <FlatList
          data={item.calificaciones}
          renderItem={({ item }) => <ComentarioCard item={item} />}
          keyExtractor={(item) => item.id}
          style={styles.itemList}
          scrollEnabled={false}
        />
      ) : (
        "Se el primero en comentar"
      )} */}
      <CometarioBtnCard />
    </View>
  );
};
