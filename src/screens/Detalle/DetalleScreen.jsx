import React from "react";
import { SafeAreaView} from 'react-native';
import { DetalleCard } from "../../components/DetalleCard/DetalleCard";
import {styles} from "./ExploreScreen.style";
import HeadCard from "../../components/HeadCard/HeadCard";

export const DetalleScreen = () => {
  return (
    <SafeAreaView style={styles.container}>   
      <HeadCard/>
      <DetalleCard/>
    </SafeAreaView>
  );
};