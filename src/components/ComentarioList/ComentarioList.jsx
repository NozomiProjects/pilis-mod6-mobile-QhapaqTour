import React from 'react';
import { styles } from './ComentarioList.styles';
import { View } from 'react-native';
import { HeadCard } from '../HeadCard/HeadCard';
import { ComentarioCard } from '../ComentarioCard/ComentarioCard';
import { CometarioBtnCard } from '../ComentarioBtnCard/CometarioBtnCard';


export const CometarioBtnCard = () => {
  return (
   
  <View style={styles.container}>
        <HeadCard/>
        <ComentarioCard/>
        <CometarioBtnCard styles={styles.itemBtnComent}/>
   
  </View>
  );
}

