import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles } from "./CometarioBtnCard.styles";

export const CometarioBtnCard = () => {
     
  const [comentario, setComentario] = useState('');

  const enviarComentario = () => {
    // Aquí puedes realizar acciones con el comentario ingresado, como enviarlo a un servidor.
    console.log('Comentario enviado:', comentario);
    // También puedes borrar el texto después de enviarlo si lo deseas.
    setComentario('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.itemEntrada}
        placeholder="Escribe tu comentario"
        value={comentario}
        onChangeText={(texto) => setComentario(texto)}
      />
      <TouchableOpacity
        style={styles.itemBoton}

        onPress={enviarComentario}
>
        <Text style={styles.itemTextoBoton}>Publicar</Text>
      </TouchableOpacity>
    </View>
  );
}

