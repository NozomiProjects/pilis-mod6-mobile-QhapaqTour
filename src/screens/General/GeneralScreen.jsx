import React from "react";
import { View } from 'react-native';
import { HeadCard } from "./../../components/HeadCard/HeadCard";
import {TresBtnCard} from "./../../components/TresBtnCard/TresBtnCard";
import {GeneralCard} from "./../../components/GeneralCard/GeneralCard"
import { styles } from "./GeneralScreen.styles";
export const GeneralScreen = () => {
  return (
    <View style={styles.container}>
     <HeadCard/>
     <TresBtnCard/>  
     <GeneralCard/>
    </View>
  );
}