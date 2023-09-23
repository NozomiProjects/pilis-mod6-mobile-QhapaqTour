import React, { useState } from "react";
import { View, TouchableOpacity, SafeAreaView, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./TimeSelector.styles";

export const TimeSelector = ({ time, setTime }) => {
  const [selectedOption, setSelectedOption] = useState("hours");

  const decreaseValue = () => {
    if (selectedOption === "hours") {
      if (time.hours > 0) {
        setTime({
          ...time,
          hours: time.hours - 1
        });
      }
    } else {
      if (time.minutes > 0) {
        setTime({
          ...time,
          minutes: time.minutes - 1
        });
      }
    }
  };

  const increaseValue = () => {
    if (selectedOption === "hours") {
      if (time.hours < 23) {
        setTime({
          ...time,
          hours: time.hours + 1
        });
      }
    } else {
      if (time.minutes < 59) {
        setTime({
          ...time,
          minutes: time.minutes + 1
        });
      }
    }
  };

  const toggleOption = () => {
    setSelectedOption(selectedOption === "hours" ? "minutes" : "hours");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContent}>
        <TouchableOpacity onPress={toggleOption} style={styles.timeContainer}>
          <View
            style={[
              styles.timeBox,
              selectedOption === "hours" && styles.selectedOption,
            ]}
          >
            <Text
              style={[
                styles.timeText,
                selectedOption === "hours" && styles.selectedText,
              ]}
            >
              {time.hours.toString().padStart(2, "0")}
            </Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.colon}>:</Text>
        
        <TouchableOpacity onPress={toggleOption} style={styles.timeContainer}>
          <View
            style={[
              styles.timeBox,
              selectedOption === "minutes" && styles.selectedOption,
            ]}
          >
            <Text
              style={[
                styles.timeText,
                selectedOption === "minutes" && styles.selectedText,
              ]}
            >
              {time.minutes.toString().padStart(2, "0")}
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.controls}>
          <TouchableOpacity
            onPress={increaseValue}
            style={styles.controlButton}
          >
            <AntDesign name="up" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={decreaseValue}
            style={styles.controlButton}
          >
            <AntDesign name="down" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
