import React, { useState } from 'react';
import { styles } from './ComentarioCard.styles';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const ComentarioCard = () => {
  const [numEstrellas, setNumEstrellas] = useState(3);
  
  const setStarRating = (rating) => {
    setNumEstrellas(rating);
  }
  return (
   
  <View style={styles.container}>
    <View style={styles.leftColumn}>
      <Image
        source={require('./../../../assets/images/puna.jpg')} // Agrega la ruta correcta de tu imagen
        style={styles.profileImage}
      />
    </View>
    <View style={styles.rightColumn}>
           <View style={styles.itemRowContain}>
                <Text style={styles.itemPrecio}>Maxwell Shifield</Text>
                <Text style={styles.itemPrecioPalabra}>Hace 3 días</Text>
            </View> 
      <Text style={styles.loremIpsum}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </Text>
          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons
                key={index}
                name={index <= numEstrellas ? 'md-star-sharp' : 'md-star-outline'}
                style={styles.itemIconStar}
          />
  ))}
</View>
    </View>
  </View>
  );
}

