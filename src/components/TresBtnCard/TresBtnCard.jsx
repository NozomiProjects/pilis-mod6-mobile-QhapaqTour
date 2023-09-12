import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from "./TresBtnCard.styles";


  export const TresBtnCard = () => {
  const navigation = useNavigation();
  const [GeneralScreen, setGeneral] = useState([]);
  const [DetalleScreen, setDetalle] = useState([]);   
  const [ComentariosScreen, setComentarios] = useState([]);

  const irGeneral = () => {
    // Aquí puedes realizar acciones con el comentario ingresado, como enviarlo a un servidor.
    console.log('llendo a comentarios:', GeneralScreen);
    // También puedes borrar el texto después de enviarlo si lo deseas.
    navigation.navigate('General');

    setGeneral('');
  };
  
  const irDetalle = () => {
    // Aquí puedes realizar acciones con el comentario ingresado, como enviarlo a un servidor.
    console.log('Llendo a detalles:', DetalleScreen);
    // También puedes borrar el texto después de enviarlo si lo deseas.
    navigation.navigate('Detalle');

    setDetalle('');
  };
  const irComentarios = () => {
    // Aquí puedes realizar acciones con el comentario ingresado, como enviarlo a un servidor.
    console.log('Llendo a comnentarios:', ComentariosScreen);
    // También puedes borrar el texto después de enviarlo si lo deseas.
    navigation.navigate('Comentarios');

    setComentarios('');
  };

  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        style={styles.itemBoton} onPress={irGeneral}>
        <Text style={styles.itemTextoBoton}>General</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.itemBoton} onPress={irDetalle}>
        <Text style={styles.itemTextoBoton}>Detalles</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.itemBoton} onPress={irComentarios}>
          
        <Text style={styles.itemTextoBoton}>Comentarios</Text>
      </TouchableOpacity>
    </View>
  );
}

