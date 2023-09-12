import { View,Image,TouchableOpacity, Text, SafeAreaView} from 'react-native';
import { styles } from './GeneralCard.styles';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';

 export const GeneralCard = () => {

    const [reservar,setReservar ] = useState('');

    const irReservar = () => {
      // Aquí puedes realizar acciones con el comentario ingresado, como enviarlo a un servidor.
      console.log('llendo a Reservar:', reservar);
      // También puedes borrar el texto después de enviarlo si lo deseas.
      setReservar('');
    };
  return (
    <SafeAreaView styles={styles.container}>
        <View style={styles.itemRowContain}>
            <Image
             source={require('../../../assets/images/puna.jpg')} // Reemplaza 'ruta_de_tu_imagen.jpg' con la ruta de tu imagen de fondo
             style={styles.itemImgGuia}
             />

            <Text style={styles.itemGuia}>Juanita Rivas</Text>
        </View>
        <View style={styles.itemRowContain}>
            <MaterialCommunityIcons name="ticket-account" size={37} color="black" />
            <Text style={styles.itemCupos}>Cupos</Text>
            <View style={styles.itemRowContainer}>
                <Text style={styles.itemCupoCantidad}>3</Text>
            </View>
        </View>
        
        <View style={styles.itemRowContainer}>
            <View style={styles.itemRowContain}>
                <Entypo name="back-in-time" style={styles.itemIcono} size={37} color="black" />
            </View>
            <Text style={styles.itemDuracion}>Duración</Text>
            <Text style={styles.itemTime}>8 horas</Text>
        </View>     

        <View style={styles.itemRowContainerBtn}>
            <View style={styles.itemRowContain}>
                <Text style={styles.itemPrecio}>$8000</Text>
                <Text style={styles.itemPrecioPalabra}>/Precio</Text>
            </View>          
                    <TouchableOpacity
                        style={styles.itemBoton}
                        onPress={irReservar}>
                        <Text style={styles.itemTextoBoton}>Reservar</Text>
                    </TouchableOpacity>
     </View> 

    </SafeAreaView>
  );
}