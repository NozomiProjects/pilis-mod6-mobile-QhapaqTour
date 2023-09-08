import React from "react";
import { View } from 'react-native';
import { styles } from './DetalleScreen.styles';
import { HeadCard } from "./../../components/HeadCard/HeadCard";
import {DetalleCard} from "./../../components/DetalleCard/DetalleCard";
import {TresBtnCard} from "./../../components/TresBtnCard/TresBtnCard";

export const DetalleScreen =()=>{
return(
    <View styles={styles.container}>
        <HeadCard styles={styles.carComentario}/>
        <TresBtnCard/>        
        <DetalleCard styles={styles.carComentario}/>
    </View>
);  
}