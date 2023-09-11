import { View, Text, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './HeadCard.styles';
import React from 'react';
 
export const HeadCard=()=> {
  return (
        <View style={styles.container}>
        {/* Contenedor para la imagen de fondo y el texto */}
        <ImageBackground
        source={require('./../../../assets/images/puna.jpg')} // Reemplaza 'ruta_de_tu_imagen.jpg' con la ruta de tu imagen de fondo
        style={styles.backgroundImage}>
            <Text style={styles.itemTexto}>Yungas</Text>
        </ImageBackground>
        
  
        {/* Contenedor para los iconos */}
        <View style={styles.iconContainer}>
          <View style={styles.leftContainer}>
            <Ionicons name="star" size={24} color="black" style={styles.starIcon} />
            <Text>Texto de la nota</Text>
          </View>
          <View style={styles.rightContainer}>
            <Ionicons name="md-heart-sharp" style={styles.rightHeartIcon} size={24} color="black" />
          </View>
        </View>
      </View>   
  );
}