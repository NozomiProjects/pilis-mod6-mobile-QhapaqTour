import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from "./TresBtnCard.styles";

export const TresBtnCard = () => {

  const [general, setGeneral] = useState('');
  const [detalles, setDetalles] = useState('');   
  const [comentarios, setComentarios] = useState('');

  const irGeneral = () => {
    // Aquí puedes realizar acciones con el comentario ingresado, como enviarlo a un servidor.
    console.log('llendo a comentarios:', general);
    // También puedes borrar el texto después de enviarlo si lo deseas.
    setGeneral('');
  };
  const irDetalles = () => {
    // Aquí puedes realizar acciones con el comentario ingresado, como enviarlo a un servidor.
    console.log('Llendo a detalles:', detalles);
    // También puedes borrar el texto después de enviarlo si lo deseas.
    setDetalles('');
  };
  const irComentarios = () => {
    // Aquí puedes realizar acciones con el comentario ingresado, como enviarlo a un servidor.
    console.log('Llendo a comnentarios:', comentarios);
    // También puedes borrar el texto después de enviarlo si lo deseas.
    setComentarios('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.itemBoton}
        onPress={irGeneral}>
        <Text style={styles.itemTextoBoton}>General</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.itemBoton}
        onPress={irDetalles}>
        <Text style={styles.itemTextoBoton}>Detalles</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.itemBoton}
        onPress={irComentarios}>
        <Text style={styles.itemTextoBoton}>Comentarios</Text>
      </TouchableOpacity>
    </View>
  );
}

