import React from "react";
import { styles } from './GeneralScreen.styles';
import { SafeAreaView} from 'react-native';
import HeadCard from "../../components/HeadCard/HeadCard";
import GeneralCard from "../../components/GeneralCard/GeneralCard";

export const GeneralScreen = () => {
    return (
    <SafeAreaView style={styles.container}>   
      <HeadCard/>
     
      <GeneralCard/>
    </SafeAreaView>
  );
};