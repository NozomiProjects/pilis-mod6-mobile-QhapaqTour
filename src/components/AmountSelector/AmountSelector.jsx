import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./AmountSelector.styles";

export const AmountSelector = ({ max, amount, setAmount }) => {
  const decreaseCount = () => {
    if (amount > 1) {
      setAmount((prev) => prev - 1);
    }
  };

  const increaseCount = () => {
    if (amount < max) {
      setAmount((prev) => prev + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Personas</Text>
      <View style={styles.counterContainer}>
        <TouchableOpacity onPress={decreaseCount} style={styles.button}>
          <Text style={styles.buttonText}>
            <AntDesign name="minus" size={24} color="black" />
          </Text>
        </TouchableOpacity>
        <Text style={styles.count}>{amount}</Text>
        <TouchableOpacity onPress={increaseCount} style={styles.button}>
          <Text style={styles.buttonText}>
            <AntDesign name="plus" size={24} color="black" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
