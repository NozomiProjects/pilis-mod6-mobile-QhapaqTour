import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from "./ReservacionCard.styles";

export const ReservacionCard = () => {
     
  const [reserva, setReserva] = useState('');

  const guardarReserva = () => {
    // Aquí puedes realizar acciones con el comentario ingresado, como enviarlo a un servidor.
    console.log('Comentario enviado:', reserva);
    // También puedes borrar el texto después de enviarlo si lo deseas.
    setReserva('');
  };

  return (
    <View style={styles.container}>
           <View style={styles.itemRowContain}>
                <Text style={styles.itemPrecio}>$8000</Text>
                <Text style={styles.itemPrecioPalabra}>/Precio</Text>
            </View> 
      <TouchableOpacity
        style={styles.itemBoton}

        onPress={guardarReserva}
>
        <Text style={styles.itemTextoBoton}>Reservar</Text>
      </TouchableOpacity>
    </View>
  );
}//----------------------------------------
/*import { View,TouchableOpacity, Text, SafeAreaView} from 'react-native';
import { styles } from './ReservacionCard.styles';
import React, { useState } from 'react';


export const ReservacionCard = () => {

  const [reservar,setReservar ] = useState(''); 
    const irReservar = () => {
      // Aquí puedes realizar acciones con el comentario ingresado, como enviarlo a un servidor.
      console.log('llendo a Reservar:', reservar);
      // También puedes borrar el texto después de enviarlo si lo deseas.
      setReservar('');
    };

  return (
    <SafeAreaView styles={styles.container}>
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
}*/