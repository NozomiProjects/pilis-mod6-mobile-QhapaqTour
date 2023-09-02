import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  Text
} from "react-native";
import { styles } from "./RecorridoList.styles";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import { getRecorridos } from "../../api/recorridos";
import { RecorridoCard } from '../RecorridoCard/RecorridoCard'

export const RecorridoList = ({recorridos}) => {
  

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={recorridos}
        renderItem={RecorridoCard}
        keyExtractor={(item) => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  );
};
