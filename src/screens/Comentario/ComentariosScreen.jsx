import React from "react";
import { View } from 'react-native';
import { HeadCard } from "../../components/HeadCard/HeadCard";
import { TresBtnCard } from "../../components/TresBtnCard/TresBtnCard";
import {ComentarioCard} from "./../../components/ComentarioCard/ComentarioCard";
import {CometarioBtnCard} from "./../../components/ComentarioBtnCard/CometarioBtnCard";
import { styles } from "../../components/ComentarioBtnCard/CometarioBtnCard.styles";

export const ComentariosScreen = () => {

return(
    <View  styles={styles.container}>
      
       <HeadCard />
      <TresBtnCard/>
      <CometarioBtnCard/>

      <ComentarioCard/>
      

    </View>
);
};