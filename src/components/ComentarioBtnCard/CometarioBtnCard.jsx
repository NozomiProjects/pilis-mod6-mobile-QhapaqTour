import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles } from "./CometarioBtnCard.styles";
import { ComentariosModalCard } from '../ComentariosModalCard/ComentariosModalCard';

export const CometarioBtnCard = () => {
     
  const [comentario, setComentario] = useState('');
  const enviarComentario = () => {
    // Aquí puedes realizar acciones con el comentario ingresado, como enviarlo a un servidor.
    console.log('Comentario enviado:', comentario);
    // También puedes borrar el texto después de enviarlo si lo deseas.
    setComentario('');
  };
  
/**VENTANA MODAL */
const [modalVisible, setModalVisible] = useState(false);

const toggleModal = () => {
  setModalVisible(!modalVisible);
};

  

  return (
    <View style={styles.container}>
     {/* <TextInput
        style={styles.itemEntrada}
        placeholder="Escribe tu comentario"
        value={comentario}
        onChangeText={(texto) => setComentario(texto)}
      />
      <TouchableOpacity
        style={styles.itemBoton}
        onPress={enviarComentario}>
        <Text style={styles.itemTextoBoton}>Publicar</Text>
  </TouchableOpacity>*/}
        {/** */}
              <TouchableOpacity  style={styles.itemBoton} onPress={toggleModal}>
                  <Text>Escribe Una opinión</Text>
              </TouchableOpacity>
      <ComentariosModalCard visible={modalVisible} onClose={toggleModal} />


     </View>
  );
}

