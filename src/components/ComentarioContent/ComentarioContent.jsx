import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { CometarioBtnCard } from "../ComentarioBtnCard/CometarioBtnCard";
import { ComentarioCard } from "../ComentarioCard/ComentarioCard";
import { styles } from "./ComentarioContent.styles";
import { getComentariosByRecorrido } from "../../api/recorridos";

export const ComentarioContent = ({ item }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getComentariosByRecorrido(item.id)
      .then((res) => setData(res))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <CometarioBtnCard />

      {data.length > 0 ? (
        data.map((item) => <ComentarioCard key={item.id} item={item} />)
      ) : (
        <Text>Se el primero en comentar</Text>
      )}
    </View>
  );
};
