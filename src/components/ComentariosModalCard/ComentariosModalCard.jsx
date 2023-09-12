import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, TextInput } from 'react-native';
import {styles} from './ComentariosModalCard.styles'; // Importa los estilos desde el archivo externo
import { AntDesign } from '@expo/vector-icons'; 

export const ComentariosModalCard = ({ visible, onClose }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleStarClick = (starIndex) => {
    setRating(starIndex);
  };

  const handleCommentChange = (text) => {
    setComment(text);
  };

  const handleCancel = () => {
    setRating(0);
    setComment('');
    onClose();
  };

  const handlePublish = () => {
    // Implementa la lógica para publicar la calificación y el comentario.
    // Luego, cierra el modal y restablece el estado.
    console.log('Comentario enviado:', comment);
    console.log('Calificación enviada:', rating);

    setRating(0);
    setComment('');
    onClose();
  };
  
  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>San Francisco</Text>
          <Text style={styles.subtitle}>Califica este recorrido</Text>
          <View style={styles.starContainer}>
            {[1, 2, 3, 4, 5].map((index) => (
              <TouchableOpacity key={index} onPress={() => handleStarClick(index)}>
                <AntDesign
                  name={index <= rating ? 'star' : 'staro'}                 
                  style={styles.itemStart}
                />
              </TouchableOpacity>
            ))}
          </View>
          <TextInput
            placeholder="Agrega un comentario..."
            onChangeText={handleCommentChange}
            value={comment}
            multiline
            numberOfLines={7}
            style={styles.commentInput}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity  onPress={handleCancel} style={styles.itemBtn}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePublish} style={styles.itemBtn}>
              <Text style={styles.buttonText}>Publicar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};